// index.js
import 'dotenv/config';
import express from "express";
import fetch from "node-fetch";
import cookieParser from "cookie-parser";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------- CONFIG ----------------
const LOGIN = "admin";
const PASSWORD = "novex2026";

const API_KEY = process.env.API_KEY;
const AD_ACCOUNT_ID = process.env.AD_ACCOUNT_ID;

const REPORT_CONFIGS = [
  { name: "Greek", product_id: "JdKstbdrGyu6rG43" },
  { name: "777 Spark", product_id: "RzsypCQ4XMZZAB39" },
  { name: "Big Win Charge", product_id: "s9mpuudmBBTdJ2mo" },
  { name: "Royal Fruits Tap", product_id: "nLNpT49D2fyj3Zyq" }
];

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ---------------- AUTH ----------------
function auth(req, res, next){
  if(req.cookies.auth === "true") next();
  else res.redirect("/login");
}

// ---------------- STYLES ----------------
function styles() {
  return `
<style>
body{font-family:Arial;background:#f4f6f9;margin:0;padding:40px;}
.container{max-width:1200px;margin:auto;background:white;padding:30px;border-radius:10px;box-shadow:0 3px 10px rgba(0,0,0,0.1);}
h1{margin-bottom:20px}
a{color:#1976d2;text-decoration:none;font-weight:bold;}
button{background:#1976d2;color:white;border:none;padding:10px 20px;border-radius:6px;cursor:pointer;}
button:hover{background:#1257a8}
input{padding:8px;margin:5px;border:1px solid #ccc;border-radius:5px;}
table{border-collapse:collapse;width:100%;margin-top:15px;}
th{background:#1976d2;color:white;padding:10px;}
td{padding:8px;border-bottom:1px solid #eee;}
tr:hover{background:#f5f7fa;}
.topbar{display:flex;gap:20px;margin-bottom:20px;}
</style>`;
}

// ---------------- DATE ----------------
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

// ---------------- MOLOCO ----------------
async function getToken() {
  if(getToken.cached && Date.now() - getToken.time < 3*24*60*60*1000) return getToken.cached;
  const resp = await fetch("https://api.moloco.cloud/cm/v1/auth/tokens",{
    method: "POST",
    headers: { "accept":"application/json", "content-type":"application/json" },
    body: JSON.stringify({ api_key: API_KEY })
  });
  const data = await resp.json();
  getToken.cached = data.token;
  getToken.time = Date.now();
  return data.token;
}

async function createReport(token, product_id, date) {
  const resp = await fetch(`https://api.moloco.cloud/cm/v1/reports?ad_account_id=${AD_ACCOUNT_ID}`, {
    method: "POST",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ date_range: { start: date, end: date }, ad_account_id: AD_ACCOUNT_ID, product_id, dimensions: ["SKAN"] })
  });
  const data = await resp.json();
  return data.id;
}

async function waitUntilReady(token, report_id) {
  while(true){
    const resp = await fetch(`https://api.moloco.cloud/cm/v1/reports/${report_id}/status`, {
      headers: { "accept":"application/json", "Authorization": `Bearer ${token}` }
    });
    const data = await resp.json();
    if(data.status === "READY") return data.location_json;
    await new Promise(r => setTimeout(r, 3000));
  }
}

async function fetchRows(token, config, date) {
  const report_id = await createReport(token, config.product_id, date);
  const url = await waitUntilReady(token, report_id);
  const json = await fetch(url);
  const data = await json.json();
  return data.rows || [];
}

// ---------------- BUILD TABLE ----------------
function buildTable(rows) {
  const headers = new Set();
  rows.forEach(r=>{
    Object.keys(r.ad_account||{}).forEach(k=>headers.add(`ad_account.${k}`));
    Object.keys(r.traffic||{}).forEach(k=>headers.add(`traffic.${k}`));
    Object.keys(r.metric||{}).forEach(k=>headers.add(`metric.${k}`));
  });
  const h = [...headers];
  const head = h.map(x=>`<th>${x}</th>`).join("");
  const body = rows.map(r=>`<tr>${h.map(col=>{const [p,k]=col.split("."); return `<td>${r[p]?.[k]??""}</td>`}).join("")}</tr>`).join("");
  return `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

// ---------------- LOGIN ----------------
app.get("/login", (req,res) => res.send(`${styles()}<div class="container"><h1>Login</h1><form method="POST"><input name="login" placeholder="login"><br><input type="password" name="password" placeholder="password"><br><br><button>Login</button></form></div>`));
app.post("/login", async(req,res)=>{
  const {login, password} = req.body;
  if(login===LOGIN && password===PASSWORD){
    res.cookie("auth","true");
    res.redirect("/");
  } else res.send("Wrong login");
});
app.get("/logout", (req,res)=>{ res.clearCookie("auth"); res.redirect("/login"); });

// ---------------- HOME ----------------
app.get("/", auth, (req,res)=>{
  const date = today();
  res.send(`${styles()}<div class="container"><h1>Moloco Reports</h1><div class="topbar"><form method="POST"><input type="date" name="reportDate" value="${date}"><button>Generate Reports</button></form><a href="/logs">Logs</a><a href="/logout">Logout</a></div></div>`);
});

// ---------------- GENERATE REPORTS ----------------
app.post("/", auth, async(req,res)=>{
  const selectedDate = req.body.reportDate || today();
  const token = await getToken();
  let html = `${styles()}<div class="container"><h1>Reports ${selectedDate}</h1><div class="topbar"><a href="/">Home</a><a href="/logs">Logs</a><a href="/logout">Logout</a></div>`;

  for(const config of REPORT_CONFIGS){
    let report = await prisma.report.findFirst({ where:{ date:selectedDate, product:config.name } });
    if(!report){
      const rows = await fetchRows(token, config, selectedDate);
      report = await prisma.report.create({ data:{ date:selectedDate, product:config.name, rows } });
    }
    html += `<h2>${config.name}</h2>`;
    html += report.rows.length ? buildTable(report.rows) : "<p>No data</p>";
  }

  html += "</div>";
  res.send(html);
});

// ---------------- LOGS ----------------
app.get("/logs", auth, async(req,res)=>{
  const reports = await prisma.report.findMany({ orderBy:{ createdAt:'desc' } });
  let html = `${styles()}<div class="container"><h1>Saved Reports</h1><div class="topbar"><a href="/">Home</a><a href="/logout">Logout</a></div><table><tr><th>Date</th><th>Product</th><th>Rows</th><th>Open</th></tr>`;
  reports.forEach(r => {
    html += `<tr><td>${r.date}</td><td>${r.product}</td><td>${r.rows.length}</td><td><a href="/report?id=${r.id}">Open</a></td></tr>`;
  });
  html += "</table></div>";
  res.send(html);
});

// ---------------- VIEW REPORT ----------------
app.get("/report", auth, async(req,res)=>{
  const id = Number(req.query.id);
  const report = await prisma.report.findUnique({ where:{ id } });
  if(!report) return res.send("Not found");
  let html = `${styles()}<div class="container"><h1>${report.product} (${report.date})</h1><div class="topbar"><a href="/logs">Back</a><a href="/logout">Logout</a></div>`;
  html += report.rows.length ? buildTable(report.rows) : "<p>No data</p>";
  html += "</div>";
  res.send(html);
});

// ---------------- START SERVER ----------------
app.listen(PORT,()=>console.log(`Server running at http://localhost:${PORT}`));