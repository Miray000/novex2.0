import 'dotenv/config'
import express from "express"
import fetch from "node-fetch"
import cookieParser from "cookie-parser"
import { PrismaClient } from "./generated/prisma/client.js"
import { PrismaPg } from "@prisma/adapter-pg"
import path from "path"
import { fileURLToPath } from "url"
import os from "os"
import axios from "axios";
import TelegramBot from "node-telegram-bot-api";

const LOGS = []
const MAX_LOGS = 1000

const connectionString = process.env.DATABASE_URL
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const app = express()
app.use(express.json());


function getSystemStats() {
  const cpus = os.cpus()

  const load = os.loadavg()[0] // нагрузка за 1 мин
  const cpuUsage = (load / cpus.length) * 100

  const totalMem = os.totalmem()
  const freeMem = os.freemem()
  const usedMem = totalMem - freeMem

  return {
    cpu: cpuUsage.toFixed(2),
    ram: (usedMem / 1024 / 1024).toFixed(0),
    ramTotal: (totalMem / 1024 / 1024).toFixed(0)
  }
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicPath = path.join(__dirname, "public")

app.use(express.static(publicPath))
const PORT = process.env.PORT || 3000


// ---------------- CONFIG ----------------

const LOGIN="admin"
const PASSWORD="novex2026"

const API_KEY=process.env.API_KEY
const AD_ACCOUNT_ID=process.env.AD_ACCOUNT_ID
const UNITY_USER = process.env.UNITY_USER
const UNITY_PASS = process.env.UNITY_PASS
const UNITY_ORG_ID = process.env.UNITY_ORG_ID

const REPORT_CONFIGS=[
{name:"Greek",product_id:"JdKstbdrGyu6rG43"},
{name:"777 Spark",product_id:"RzsypCQ4XMZZAB39"},
{name:"Big Win Charge",product_id:"s9mpuudmBBTdJ2mo"},
{name:"Royal Fruits Tap",product_id:"nLNpT49D2fyj3Zyq"},
{name:"Sоn of Еgypt",product_id:"p1Iy84ip2fjAHWAp"},
{name:"Big Fishing Bananza",product_id:"GjoeFffcGl2qxR9z"},
{name:"Fоrtune Drаgon",product_id:"I2KIKmYmSiipixKR"},
{name:"Wolf Golds",product_id:"y6JfgVCnqtxVpnTq"},
{name:"Big Win Smash",product_id:"VL86svUKDzF8mC1x"},
{name:"Gаtes Of Оlympus",product_id:"UMUXJ7nayWSP8GCn"},
{name:"Big Catch Smash",product_id:"VhP7UFfWzoycFA9K"},
{name:"Dragons Lore",product_id:"a0B7yg1uaAoIt4sR"},
{name:"Dragons Flame",product_id:"aJuzdX0sqDDA5bTz"},
{name:"Buff Clap",product_id:"sZRiXg4x3Y18oaH8"},
{name:"Fortune Fire Dragon",product_id:"sI5tlgQdqUK2rban"},
]



app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



// ---------------- THEME ----------------

function applyTheme(req,res){

 const theme=req.query.theme || req.cookies.theme || "dark"

 if(req.query.theme) res.cookie("theme",req.query.theme)

 return theme

}

function themeToggle(theme,params=""){

 if(theme==="dark"){
  return ` <div class="theme-toggle"><a href="/render"><div class="clock" id="clock">00:00:00</div></a></div> `
 }

 return ` <div class="theme-toggle"><a href="/render"><div class="clock" id="clock">00:00:00</div></a></div> `

}

// ---------------- AUTH ----------------

function auth(req,res,next){

 if(req.cookies.auth==="true") next()
 else res.redirect("/login")

}

// ---------------- STYLE ----------------

function styles(theme="dark"){

 const dark=theme==="dark"

 const bg=dark?"black":"white"
 const text=dark?"white":"black"
 const link=dark?"#0ff":"#B19CD9"
 const tableBg=dark?"#111":"#eee"
 const thBg=dark?"#0ff":"#B19CD9"
 const thColor=dark?"black":"white"
 const inputBorder=dark?"#444":"#ccc"
 const buttonBg=dark?"rgb(52 49 49)":"#B19CD9"
 const buttonTex=dark?"black":"white"
  const buttonHov=dark?"rgb(52 49 49)":"#C4B4E0"

 return `
  <head>

<meta name="theme-color" content="#000000">
 <meta charset="UTF-8">
 <title>Dashboard</title>
 <link rel="icon" href="https://i.ibb.co/3yWsvJ9C/favicon.jpg">
<script>
function updateClock() {
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent =
        hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
updateClock();
</script>
 <style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
 body{
 
 background:${bg};
 color:${text};
 margin:0;
 padding:40px;
 font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
 }

 .container{
 max-width:1200px;
 margin:auto;
 width:70%;
 }

 a{
 color:${link};
 text-decoration:none;
 margin-right:15px;
 }

.logs_h{
border:2px solid;
font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
}

 .logs_data{
 text-align:center;
 font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
 }

.keitaro_hre{
color:${buttonTex};
margin:0 auto;
}
form{
font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
}

h1{
font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    text-shadow: 
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #0ff;
}
 button{
 background:${buttonBg};
 border:none;
 padding:10px 20px;
 border-radius:8px;
 cursor:pointer;
 color:#0ff;
 font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
 }

 button:hover{
 background:${buttonHov};
 text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
 }

 h2{
 font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
 }
 input,select{
 padding:8px;
 margin:5px;
 border-radius:25px;
 border:1px solid ${inputBorder};
 }

 table{
 width:100%;
 border-collapse:collapse;
 margin-top:20px;
 background:${tableBg};
 }

 th{
 background:${thBg};
 color:${thColor};
 padding:10px;
 }

 td{
 padding:8px;
 border-bottom:1px solid ${inputBorder};
 }

 .grid{
 display:grid;
 grid-template-columns:200px 2fr;
 }

 .grid-template{
     display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
 }
 .stats{
 display:grid;
 grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
 gap:20px;
 margin-bottom:30px;
 
 }

 label{
 font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
 }
 .stat{
 background:${tableBg};
 border:1px solid ${link};
 padding:20px;
 border-radius:12px;
 text-align:center;
 font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
 }

 .sil{
 font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
 background: rgb(52 49 49);
    padding: 10px 10px;
    border-radius: 20px;
    }

    .sil::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 2px;
  background: #0ff;
  box-shadow: 0 0 8px #0ff;
  transition: width 0.3s ease;
}

.sil:hover{
 text-shadow: 
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #0ff;
transform: scale(1.05);
border:1px solid #0ff;

}
 .theme-toggle{
 position:absolute;
 top:20px;
 right:20px;
 }
.log-form{
display:flex;
justify-content:center;
text-align:center;
}

.tainer{
display: flex;
    flex-direction: column;
    row-gap: 20px;
    position: fixed;
    justify-content: unset;
    top: 0px;
}

.mizi{
display: flex;
justify-content: center;
}

.mage{
width: 50%;
height:50%;
margin:0 auto:
}
.zag-log{
text-align:center;
}
.bainer{
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.date-input {
  padding: 10px 14px;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: #eee;
  font-size: 14px;
  outline: none;
  transition: 0.2s;
  font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
}

.date-input:hover {
  border-color: #0ff;
  text-shadow: 
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #0ff;
}

.date-input:focus {
  border-color: #888;
  box-shadow: 0 0 0 2px rgba(255,255,255,0.1);
}

/* Иконка календаря (Chrome) */
.date-input::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}
  #fireworks {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    pointer-events: none;
}
  .clock {
        color: #0ff;
        font-size: 16px;
        letter-spacing: 10px;
        text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff;
        padding: 20px 40px;
        border: 2px solid #0ff;
        border-radius: 10px;
        background: rgba(0, 255, 255, 0.05);
        box-shadow: 0 0 20px #0ff inset, 0 0 20px #0ff;
    }
 </style>
 </head>
 `
}

// ---------------- DATE ----------------

function today(){

 const d=new Date()

 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`

}

// ---------------- PARSE ROWS ----------------

function parseRows(rows){

 if(typeof rows==="string"){
  try{ rows=JSON.parse(rows) }
  catch{ rows=[] }
 }

 if(!Array.isArray(rows)) rows=[]

 return rows

}

// ---------------- LOGIN ----------------

app.get("/login",(req,res)=>{

 const theme=applyTheme(req,res)

 res.send(`${styles(theme)}

 ${themeToggle(theme)}

 <div class="container bainer">

 <h1 class="zag-log">Login</h1>
<div class="log-form">
 <form method="POST">

 <input name="login" placeholder="Login"><br>

 <input type="password" name="password" placeholder="Password"><br><br>

 <input type="hidden" name="theme" value="${theme}">

 <button>Login</button>

 </form>
</div>
 </div>
 `)

})

app.post("/login",(req,res)=>{

 const {login,password}=req.body

 if(login===LOGIN && password===PASSWORD){

 res.cookie("auth","true")

 res.redirect("/")

 }

 else res.send("Wrong login")

})

app.get("/test", async (req, res) => {
  console.log("TEST HIT");

  try {
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, "TEST OK");
    res.send("sent");
  } catch (e) {
    res.send(e.message);
  }
});

// ---------------- DASHBOARD ----------------
app.get("/", auth, async (req, res) => {
  const theme = applyTheme(req, res)
  const selectedDate = req.query.date || today()
  const selectedProduct = req.query.product || "All"

  // Получаем отчеты за выбранную дату
  let reports = await prisma.report.findMany({ where: { date: selectedDate } })
  if (selectedProduct !== "All") reports = reports.filter(r => r.product === selectedProduct)

  let spend = 0, clicks = 0, installs = 0, impressions = 0, revenue = 0
  reports.forEach(report => {
    parseRows(report.rows).forEach(row => {
      const m = row.metric || {}
      spend += Number(m.spend || 0)
      clicks += Number(m.clicks || 0)
      installs += Number(m.installs || 0)
      impressions += Number(m.impressions || 0)
      revenue += Number(m.revenue || 0)
    })
  })

  const cpi = installs ? spend / installs : 0
  const ctr = impressions ? (clicks / impressions) * 100 : 0
  const cr = clicks ? (installs / clicks) * 100 : 0
  const profit = revenue - spend

  // Опции продуктов
  const productOptions = ["All", ...REPORT_CONFIGS.map(p => p.name)]
    .map(p => `<option value="${p}" ${p === selectedProduct ? "selected" : ""}>${p}</option>`).join("")

  // Для графика последних 7 дней
  const allReports = await prisma.report.findMany({ orderBy: { date: "asc" } })
  const last7 = [...new Set(allReports.map(r => r.date))].sort().slice(-7)

  const datasets = []
  const colors = ["red", "cyan", "yellow", "orange"]

  REPORT_CONFIGS.forEach((config, i) => {
    const data = last7.map(date => {
      let installs = 0
      allReports
        .filter(r => r.product === config.name && r.date === date)
        .forEach(r => {
          parseRows(r.rows).forEach(row => {
            installs += Number(row.metric?.installs || 0)
          })
        })
      return installs
    })
    datasets.push({
      label: config.name,
      data,
      borderColor: colors[i % colors.length],
      backgroundColor: "transparent",
      tension: 0.3
    })
  })

  // Рендер страницы
  res.send(`${styles(theme)}
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<head>

</head>


<div class="grid">

<div class="grid-template">
<div class="tainer">
<a class="mizi" href="/">
<img class="mage" src="https://i.ibb.co/3yWsvJ9C/favicon.jpg" />
</a>
<a class="sil" href="/logs">Logs</a>
<a class="sil" href="/chart">Charts</a>
<a class="sil" href="/keitaro">Keitaro</a>
<a class="sil" href="/apps">Moloko Spend</a>
<a class="sil" href="/logout">Logout</a>
</div>
</div>
<div class="container">
${themeToggle(theme)}



<h1>Moloco Dashboard</h1>

<form>
Date <input class="date-input" type="date" name="date" value="${selectedDate}">
Product <select class="date-input" name="product">${productOptions}</select>
<input type="hidden" name="theme" value="${theme}">
<button>Show</button>
</form>

<form method="POST">
Generate report <input class="date-input" type="date" name="reportDate" value="${selectedDate}">
<button>Generate</button>
</form>

<h2>KPI</h2>
<div class="stats" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap:20px; margin-bottom:30px;">
  <div class="stat"><h3>Spend</h3><p>$${spend.toFixed(2)}</p></div>
  <div class="stat"><h3>Revenue</h3><p>$${revenue.toFixed(2)}</p></div>
  <div class="stat"><h3>Profit</h3><p>$${profit.toFixed(2)}</p></div>
  <div class="stat"><h3>Clicks</h3><p>${clicks}</p></div>
  <div class="stat"><h3>Installs</h3><p>${installs}</p></div>
  <div class="stat"><h3>Impressions</h3><p>${impressions}</p></div>
  <div class="stat"><h3>CPI</h3><p>$${cpi.toFixed(2)}</p></div>
  <div class="stat"><h3>CTR</h3><p>${ctr.toFixed(2)}%</p></div>
  <div class="stat"><h3>CR</h3><p>${cr.toFixed(2)}%</p></div>
</div>

<h2>Installs Last 7 Days</h2>
<canvas id="chart" style="background:white; padding:10px; border-radius:10px;"></canvas>
</div>


<script>
const ctx = document.getElementById("chart").getContext("2d")
new Chart(ctx, {
  type: "line",
  data: {
    labels: ${JSON.stringify(last7)},
    datasets: ${JSON.stringify(datasets)}
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: { y: { beginAtZero: true } }
  }
})
</script>
<script>
let secret = ""
document.addEventListener("keydown", (e)=>{
  secret += e.key.toLowerCase()

  if(secret.includes("gamer")){
    window.location.href = "/game"
  }

  if(secret.length > 10) secret = secret.slice(-10)
})
</script>

</div>
`)
})





// ---------------- LOGS ----------------
app.get("/logs", auth, async (req, res) => {
  const theme = applyTheme(req, res)  // применяем тему
  const date = req.query.date || ""
  const product = req.query.product || ""
  const percent = Number(req.query.percent || 0)

  const where = {}
  if (date) where.date = date
  if (product) where.product = product

  const reports = await prisma.report.findMany({ where, orderBy: { date: "desc" } })

  
  let html = `${styles(theme)}<div class="grid">
<div class="grid-template">
<div class="tainer">
<a class="mizi" href="/">
<img class="mage" src="https://i.ibb.co/3yWsvJ9C/favicon.jpg" />
</a>
<a class="sil" href="/logs">Logs</a>
<a class="sil" href="/chart">Charts</a>
<a class="sil" href="/keitaro">Keitaro</a>
<a class="sil" href="/apps">Moloko Spend</a>
<a class="sil" href="/logout">Logout</a>
</div>
</div>
<div><div class="container">
  ${themeToggle(theme, `date=${date}&product=${product}&percent=${percent}`)}

  <h1>Saved Reports</h1>

  <form method="GET">
   <label> Date </label>
    <input type="date" class="date-input" name="date" value="${date}">
    <label>Додаток</label>
    <select class="date-input" name="product">
      <option value="">All</option>
      <option ${product === "Greek" ? "selected" : ""}>Greek</option>
      <option ${product === "777 Spark" ? "selected" : ""}>777 Spark</option>
      <option ${product === "Big Win Charge" ? "selected" : ""}>Big Win Charge</option>
      <option ${product === "Royal Fruits Tap" ? "selected" : ""}>Royal Fruits Tap</option>
    </select>
    <label>-% спенду</label>
    <input class="date-input" type="number" name="percent" value="${percent}" placeholder="% spend">
    <input type="hidden" name="theme" value="${theme}">
    <button>Filter</button>
  </form>
  <table>
    <tr><th class="logs_h">Date</th><th class="logs_h">Product</th><th class="logs_h">Rows</th><th class="logs_h">Open</th></tr>`

  reports.forEach(r => {
    html += `<tr>
      <td class="logs_data">${r.date}</td>
      <td class="logs_data">${r.product}</td>
      <td class="logs_data">${parseRows(r.rows).length}</td>
      <td class="logs_data"><a href="/report?id=${r.id}&percent=${percent}&theme=${theme}">Open</a></td>
    </tr>`
  })

  html += "</table></div></div>"
  res.send(html)
})

// ---------------- REPORT ----------------
app.get("/report", auth, async (req, res) => {
  const theme = applyTheme(req, res)  // применяем тему
  const id = Number(req.query.id)
  const percent = Number(req.query.percent || 0)
  const report = await prisma.report.findUnique({ where: { id } })
  if (!report) return res.send("Not found")

  res.send(`${styles(theme)}
  <div class="grid">
<div class="grid-template">
<div class="tainer">
<a class="mizi" href="/">
<img class="mage" src="https://i.ibb.co/3yWsvJ9C/favicon.jpg" />
</a>
<a class="sil" href="/">Back</a>
<a class="sil" href="/logout">Logout</a>

</div>
</div>
  <div class="container">
    ${themeToggle(theme, `id=${id}&percent=${percent}`)}
    <h1>${report.product} (${report.date})</h1>
    
    ${buildTable(report.rows, percent)}
  </div></div>`)
})

// ---------------- BUILD TABLE ----------------
function buildTable(rows, percent = 0) {
  rows = parseRows(rows)

  let html = `<table>
    <tr>
      <th>Row</th>
      <th>Spend</th>
      <th>Revenue</th>
      <th>Clicks</th>
      <th>Installs</th>
      <th>Impressions</th>
      <th>Profit</th>
      <th>CPI</th>
      <th>CTR</th>
      <th>CR</th>
    </tr>`

  rows.forEach((row, i) => {
    const m = row.metric || {}
    const spend = Number(m.spend || 0)
    const revenue = Number(m.revenue || 0)
    const clicks = Number(m.clicks || 0)
    const installs = Number(m.installs || 0)
    const impressions = Number(m.impressions || 0)
    const profit = revenue - spend
    const cpi = installs ? spend / installs : 0
    const ctr = impressions ? (clicks / impressions) * 100 : 0
    const cr = clicks ? (installs / clicks) * 100 : 0

    // Подсветка по проценту
    const rowStyle = percent > 0 && spend < (percent / 100) * revenue ? ' style="background:#faa"' : ''

    html += `<tr${rowStyle}>
      <td>${i + 1}</td>
      <td>$${spend.toFixed(2)}</td>
      <td>$${revenue.toFixed(2)}</td>
      <td>${clicks}</td>
      <td>${installs}</td>
      <td>${impressions}</td>
      <td>$${profit.toFixed(2)}</td>
      <td>$${cpi.toFixed(2)}</td>
      <td>${ctr.toFixed(2)}%</td>
      <td>${cr.toFixed(2)}%</td>
    </tr>`
  })

  html += "</table>"
  return html
}

// ---------------- APPS ----------------

// 👉 helper для переноса текста
function wrapText(str, n = 30) {
  return str.replace(new RegExp(`(.{${n}})`, "g"), "$1<br>")
}

// ---------------- GET ----------------

app.get("/apps", auth, async (req, res) => {
  const theme = applyTheme(req, res)

  const startDate = req.query.startDate || today()
  const endDate = req.query.endDate || startDate
  const countryFilter = req.query.country || ""

  const records = await prisma.appSpend.findMany({
    where: {
      date: {
        gte: startDate,
        lte: endDate
      },
      ...(countryFilter && {
        country: countryFilter
      })
    }
  })

  const dates = []
  let current = new Date(startDate)

  while (current <= new Date(endDate)) {
    dates.push(current.toISOString().slice(0, 10))
    current.setDate(current.getDate() + 1)
  }

  const appData = {}

  records.forEach(r => {
    if (!appData[r.app_name]) {
      appData[r.app_name] = {
        dates: {},
        campaigns: new Map(),
        adAccounts: new Set()
      }
    }

    appData[r.app_name].dates[r.date] =
      (appData[r.app_name].dates[r.date] || 0) + r.spend

    appData[r.app_name].campaigns.set(
      r.campaign_name,
      r.country || "Unknown"
    )

    appData[r.app_name].adAccounts.add(
      r.ad_account || "Unknown"
    )
  })

  function wrapText(str, n = 30) {
    if (!str) return "—"
    return String(str).replace(new RegExp(`(.{${n}})`, "g"), "$1<br>")
  }

  const appTotals = Object.entries(appData)
    .map(([app, obj]) => {
      const total = Object.values(obj.dates).reduce((a, b) => a + b, 0)

      return {
        app,
        total,
        data: obj.dates,
        campaigns: Array.from(obj.campaigns.entries()),
        adAccounts: Array.from(obj.adAccounts)
      }
    })
    .sort((a, b) => b.total - a.total)

  let header = `<tr><th class="logs_h">App</th><th class="logs_h">Ad Account</th><th class="logs_h">Campaigns</th>`

  dates.forEach(d => {
    header += `<th class="logs_h">${d}</th>`
  })

  header += `<th class="logs_h">Total</th></tr>`

  let rowsHtml = appTotals.map(obj => {
    let row = `<tr class="logs_data">`

    row += `<td>${obj.app}</td>`

    row += `<td>${obj.adAccounts.join("<br>")}</td>`

    row += `<td class="campaign">${
      obj.campaigns
        .map(
          ([name, country]) =>
            `${wrapText(name || "Unknown")} <span style="color:#0ff">(${country})</span>`
        )
        .join("<br>")
    }</td>`

    dates.forEach(d => {
      const val = obj.data[d] || 0
      row += `<td>$${val.toFixed(2)}</td>`
    })

    row += `<td><b>$${obj.total.toFixed(2)}</b></td>`
    row += `</tr>`

    return row
  }).join("")

  const grandTotal = appTotals.reduce((sum, a) => sum + a.total, 0)

  res.send(`
    ${styles(theme)}
    ${themeToggle(theme)}

    <style>
      td.campaign {
        max-width: 260px;
        white-space: normal;
        overflow-wrap: anywhere;
        font-size: 12px;
        line-height: 1.4;
      }
    </style>
 <div class="grid">
<div class="grid-template">
<div class="tainer">
<a class="mizi" href="/">
<img class="mage" src="https://i.ibb.co/3yWsvJ9C/favicon.jpg" />
</a>
<a class="sil" href="/logs">Logs</a>
<a class="sil" href="/chart">Charts</a>
<a class="sil" href="/keitaro">Keitaro</a>
<a class="sil" href="/apps">Moloko Spend</a>
<a class="sil" href="/logout">Logout</a>
</div>
</div>
    <div class="container">
  
      <h1>Spend by App (Moloco Overview)</h1>
  
      <form method="GET">
        From <input class="date-input" type="date" name="startDate" value="${startDate}">
        To <input class="date-input" type="date" name="endDate" value="${endDate}">

        Country
        <select class="date-input" name="country">
          <option value="">All</option>
          <option value="AUS" ${countryFilter === "AUS" ? "selected" : ""}>AU</option>
          <option value="CAN" ${countryFilter === "CAN" ? "selected" : ""}>CA</option>
        </select>

        <button>Show</button>
      </form>

      <form method="POST">
        Generate From <input class="date-input" type="date" name="startDate" value="${startDate}">
        To <input class="date-input" type="date" name="endDate" value="${endDate}">
        <button>Load from Moloco</button>
      </form>

      <h2>Total Spend: $${grandTotal.toFixed(2)}</h2>

      <table>
        ${header}
        ${rowsHtml}
      </table>

    </div>
    </div>
  `)
})


// ---------------- CHARTS ----------------

app.get("/chart",auth,async(req,res)=>{

 const theme=applyTheme(req,res)

 const metric=req.query.metric || "spend"
 const startDate=req.query.startDate || ""
 const endDate=req.query.endDate || ""
 const product=req.query.product || "All"

 let reports=await prisma.report.findMany({orderBy:{date:"asc"}})

 if(startDate) reports=reports.filter(r=>r.date>=startDate)
 if(endDate) reports=reports.filter(r=>r.date<=endDate)

 const labels=[...new Set(reports.map(r=>r.date))]

 const colors=["red","cyan","yellow","orange","green"]
 const datasets=[]

 if(product==="All"){

 REPORT_CONFIGS.forEach((config,i)=>{

 const data=[]

 labels.forEach(date=>{

 let value=0

 reports
 .filter(r=>r.product===config.name && r.date===date)
 .forEach(r=>{

 parseRows(r.rows).forEach(row=>{

 const m=row.metric||{}

 if(metric==="spend") value+=Number(m.spend||0)
 if(metric==="clicks") value+=Number(m.clicks||0)
 if(metric==="installs") value+=Number(m.installs||0)
 if(metric==="impressions") value+=Number(m.impressions||0)

 })

 })

 data.push(value)

 })

 datasets.push({
 label:config.name,
 data,
 borderColor:colors[i%colors.length],
 tension:0.3
 })

 })

 }

 else{

 const data=[]

 labels.forEach(date=>{

 let value=0

 reports
 .filter(r=>r.product===product && r.date===date)
 .forEach(r=>{

 parseRows(r.rows).forEach(row=>{

 const m=row.metric||{}

 if(metric==="spend") value+=Number(m.spend||0)
 if(metric==="clicks") value+=Number(m.clicks||0)
 if(metric==="installs") value+=Number(m.installs||0)
 if(metric==="impressions") value+=Number(m.impressions||0)

 })

 })

 data.push(value)

 })

 datasets.push({
 label:product,
 data,
 borderColor:"cyan",
 tension:0.3,
 color:"white"
 })

 }

 const productOptions=["All",...REPORT_CONFIGS.map(p=>p.name)]
 .map(p=>`<option value="${p}" ${p===product?"selected":""}>${p}</option>`).join("")

 res.send(`${styles(theme)}

 <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
 
<div class="grid">
<div class="grid-template">
<div class="tainer">
<a class="mizi" href="/">
<img class="mage" src="https://i.ibb.co/3yWsvJ9C/favicon.jpg" />
</a>
<a class="sil" href="/logs">Logs</a>
<a class="sil" href="/chart">Charts</a>
<a class="sil" href="/keitaro">Keitaro</a>
<a class="sil" href="/apps">Moloko Spend</a>
<a class="sil" href="/logout">Logout</a>
</div>
</div>
 <div class="container">

 ${themeToggle(theme)}
 
 <h1>Charts</h1>



 <form>

 Metric

 <select class="date-input" name="metric">

 <option value="spend">Spend</option>
 <option value="clicks">Clicks</option>
 <option value="installs">Installs</option>
 <option value="impressions">Impressions</option>

 </select>

 Product

 <select class="date-input" name="product">${productOptions}</select>

 From <input class="date-input" type="date" name="startDate" value="${startDate}">
 To <input class="date-input" type="date" name="endDate" value="${endDate}">

 <input type="hidden" name="theme" value="${theme}">

 <button>Show</button>

 </form>

 <canvas id="chart"></canvas>

 </div>

 <script>

 new Chart(document.getElementById("chart"),{

 type:"line",

 data:{
 labels:${JSON.stringify(labels)},
 datasets:${JSON.stringify(datasets)}
 }

 })

 </script>
 </div>

 `)

})

// ---------------- UNITY PAGE ----------------

app.get("/unity", auth, async (req, res) => {
  const theme = applyTheme(req, res)

  const start = req.query.start || today()
  const end = req.query.end || start
  const country = req.query.country || ""

  // 👉 получаем список уникальных стран
  const countriesRaw = await prisma.unityReport.findMany({
    select: { country_unity: true },
    distinct: ["country_unity"],
    orderBy: { country_unity: "asc" }
  })

  const countries = countriesRaw.map(c => c.country_unity).filter(Boolean)

  const reports = await prisma.unityReport.findMany({
    where: {
      date: {
        gte: start,
        lte: end
      },
      ...(country && {
        country_unity: country
      })
    },
    orderBy: [
      { date: "asc" },
      { spend: "desc" }
    ]
  })

  const total = reports.reduce((sum, r) => sum + r.spend, 0)

  res.send(`
    ${styles(theme)}
    ${themeToggle(theme)}
 <div class="grid">
<div class="grid-template">
<div class="tainer">
<a class="mizi" href="/">
<img class="mage" src="https://i.ibb.co/3yWsvJ9C/favicon.jpg" />
</a>
<a class="sil" href="/logs">Logs</a>
<a class="sil" href="/chart">Charts</a>
<a class="sil" href="/keitaro">Keitaro</a>
<a class="sil" href="/apps">Moloko Spend</a>
<a class="sil" href="/logout">Logout</a>
</div>
</div>
    <div class="container">

      <h1>Unity Reports</h1>


      <!-- FILTER -->
      <form method="GET">
        From <input class="date-input" type="date" name="start" value="${start}">
        To <input class="date-input" type="date" name="end" value="${end}">

        Country 
        <select class="date-input" name="country">
          <option value="">All</option>
          ${countries.map(c => `
            <option value="${c}" ${c === country ? "selected" : ""}>
              ${c}
            </option>
          `).join("")}
        </select>

        <input type="hidden" name="theme" value="${theme}">
        <button>Show</button>
      </form>

      <!-- GENERATE -->
      <form method="POST">
        Generate From <input class="date-input" type="date" name="start" value="${start}">
        To <input class="date-input" type="date" name="end" value="${end}">
        <button>Load from Unity</button>
      </form>

      ${country ? `<p><b>Filter:</b> Country = ${country}</p>` : ""}

      <h2>Total Spend: $${total.toFixed(2)}</h2>

      <table>
        <tr>
          <th class="logs_h">Date</th>
          <th class="logs_h">App ID</th>
          <th class="logs_h">App Name</th>
          <th class="logs_h">Campaign</th>
          <th class="logs_h">Country</th>
          <th class="logs_h">Spend</th>
        </tr>

        ${reports.map(r => `
          <tr class="logs_data">
            <td>${r.date}</td>
            <td>${r.app_id}</td>
            <td>${r.app_name}</td>
            <td>${r.campaign_name}</td>
            <td>${r.country_unity}</td>
            <td>$${r.spend.toFixed(6)}</td>
          </tr>
        `).join("")}

      </table>

    </div>
    </div>
  `)
})

// ---------------- GENERATE REPORT ----------------

app.post("/",auth,async(req,res)=>{

 const date=req.body.reportDate || today()

 const token=await getToken()

 for(const config of REPORT_CONFIGS){

 const rows=await fetchRows(token,config,date)

 let report=await prisma.report.findFirst({
 where:{date,product:config.name}
 })

 if(report){

 await prisma.report.update({
 where:{id:report.id},
 data:{rows}
 })

 }

 else{

 await prisma.report.create({
 data:{date,product:config.name,rows}
 })

 }

 }

 res.redirect("/")

})


app.get("/render", auth, (req, res) => {

  const theme = applyTheme(req, res)

  res.send(`
    ${styles(theme)}

    <div class="grid">
      <div class="grid-template">
        <div class="tainer">
          <a class="mizi" href="/">
            <img class="mage" src="https://i.ibb.co/3yWsvJ9C/favicon.jpg" />
          </a>
          <a class="sil" href="/logs">Logs</a>
          <a class="sil" href="/render">Render Logs</a>
          <a class="sil" href="/chart">Charts</a>
          <a class="sil" href="/logout">Logout</a>
        </div>
      </div>

      <div class="container">
        ${themeToggle(theme)}

        <h1>Live Logs</h1>

        <input id="search" placeholder="Search..." style="width:100%;padding:10px;margin-bottom:10px">

        <div id="stats" style="
  color:#0ff;
  margin-bottom:10px;
  font-size:14px;
"></div>

        <pre id="logs" style="
          background:black;
          color:#0f0;
          padding:20px;
          height:600px;
          overflow:auto;
          border:1px solid #0ff;
        "></pre>
      </div>
    </div>

    <script>
      const el = document.getElementById("logs")
      const search = document.getElementById("search")

      const es = new EventSource("/render-stream")

      let buffer = []

      const statsEl = document.getElementById("stats")

es.onmessage = function (e) {
  const data = JSON.parse(e.data)

  if (data.log) {
    buffer.push(data.log)
    if (buffer.length > 1000) buffer.shift()
  }

  if (data.stats) {
    statsEl.innerHTML =
      "CPU: " + data.stats.cpu + "% | " +
      "RAM: " + data.stats.ram + " MB / " + data.stats.ramTotal + " MB"
  }

  render()
}

      function render(){
        const q = search.value.toLowerCase()

        const filtered = buffer.filter(l =>
          l.toLowerCase().includes(q)
        )

        el.textContent = filtered.join("\\n")
        el.scrollTop = el.scrollHeight
      }

      search.oninput = render
    </script>
  `)
})

// ---------------- LOGOUT ----------------

app.get("/logout",(req,res)=>{
 res.clearCookie("auth")
 res.redirect("/login")
})
// ---------------- KEITARO ----------------
const KEITARO_URL = "https://levelupkeito.site/admin_api/v1/report/build"
const KEITARO_TOKEN = process.env.KEITARO_TOKEN

let cachedReports = []

// GET /keitaro
app.get("/keitaro", auth, async (req, res) => {
  const theme = applyTheme(req, res)

  const dateFilter = req.query.date || today()
  const timezone = req.query.timezone || "UTC"
  const groupFilter = req.query.group || "all"

  const sortMetric = req.query.sort || "conversions"
  const sortDir = req.query.dir === "asc" ? "asc" : "desc"

  let reports = cachedReports.filter(r =>
    r.date === dateFilter &&
    (groupFilter === "all" || r.group === groupFilter)
  )

  const groups = [...new Set(
    cachedReports
      .filter(r => r.date === dateFilter && r.group && r.group !== "No group")
      .map(r => r.group)
  )]

  reports.sort((a, b) => {
    const aVal = a.rows?.[sortMetric] || 0
    const bVal = b.rows?.[sortMetric] || 0
    return sortDir === "asc" ? aVal - bVal : bVal - aVal
  })

  const nextDir = dir => dir === "asc" ? "desc" : "asc"

  let tableRows = reports.map(r => {
    const m = r.rows || {}

    return `<tr class="logs_data">
      <td>${r.campaign}</td>
      <td>${r.group || "-"}</td>
      <td>${m.leads ?? 0}</td>
      <td>${m.sales ?? 0}</td>
      <td>${m.clicks ?? 0}</td>
      <td>${m.conversions ?? 0}</td>
      <td>${m.revenue ?? 0}</td>
      <td>${m.cr ?? 0}</td>
    </tr>`
  }).join("")

  res.send(`
    ${styles(theme)}
    ${themeToggle(theme)}
   <div class="grid">
<div class="grid-template">
<div class="tainer">
<a class="mizi" href="/">
<img class="mage" src="https://i.ibb.co/3yWsvJ9C/favicon.jpg" />
</a>
<a class="sil" href="/logs">Logs</a>
<a class="sil" href="/chart">Charts</a>
<a class="sil" href="/keitaro">Keitaro</a>
<a class="sil" href="/apps">Moloko Spend</a>
<a class="sil" href="/logout">Logout</a>
</div>
</div>
    <div class="container">
    
      <h1>Keitaro Dashboard (${dateFilter})</h1>

    

      <!-- FETCH -->
      <form method="POST" action="/keitaro/fetch">
        <label>From</label>
        <input class="date-input" type="date" name="from" value="${dateFilter}">

        <label>To</label>
        <input class="date-input" type="date" name="to" value="${dateFilter}">

        <label>Timezone</label>
        <select class="date-input" name="timezone">
          <option value="UTC" ${timezone==="UTC"?"selected":""}>UTC</option>
          <option value="GMT+2:00" ${timezone==="GMT+2:00"?"selected":""}>GMT+2:00</option>
          <option value="GMT+3:00" ${timezone==="GMT+3:00"?"selected":""}>GMT+3:00</option>
        </select>

        <button>Generate Report</button>
      </form>

      <!-- FILTER DATE -->
      <h2>Filter by Date</h2>
      <form method="GET" action="/keitaro">
        <input class="date-input" type="date" name="date" value="${dateFilter}">
        <input class="date-input" type="hidden" name="timezone" value="${timezone}">
        <input type="hidden" name="group" value="${groupFilter}">
        <button>Filter</button>
      </form>

      <!-- FILTER GROUP -->
      <h2>Filter by Group</h2>
      <form method="GET" action="/keitaro">
        <select class="date-input" name="group">
          <option value="all">All</option>
          ${groups.map(g => `
            <option value="${g}" ${groupFilter === g ? "selected" : ""}>
              ${g}
            </option>
          `).join("")}
        </select>

        <input type="hidden" name="date" value="${dateFilter}">
        <input type="hidden" name="timezone" value="${timezone}">
        <button>Apply</button>
      </form>

      <!-- TABLE -->
      <h2>Campaigns</h2>
      <table>
        <tr>
          <th class="logs_h">Campaign</th>
          <th class="logs_h">Group</th>

          <th class="logs_h">
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=leads&dir=${sortMetric==='leads'?nextDir(sortDir):'desc'}">
              Leads
            </a>
          </th>

          <th class="logs_h">
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=sales&dir=${sortMetric==='sales'?nextDir(sortDir):'desc'}">
              Sales
            </a>
          </th>

          <th class="logs_h">
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=clicks&dir=${sortMetric==='clicks'?nextDir(sortDir):'desc'}">
              Clicks
            </a>
          </th>

          <th class="logs_h">
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=conversions&dir=${sortMetric==='conversions'?nextDir(sortDir):'desc'}">
              Conversions
            </a>
          </th>

          <th class="logs_h">
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=revenue&dir=${sortMetric==='revenue'?nextDir(sortDir):'desc'}">
              Revenue
            </a>
          </th>
            <th class="logs_h">
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=cr&dir=${sortMetric==='cr'?nextDir(sortDir):'desc'}">
              cr
            </a>
          </th>
        </tr>

        ${tableRows}
      </table>
    </div>
    </div>
  `)
})


// POST /keitaro/fetch
app.post("/keitaro/fetch", auth, async (req, res) => {
  const theme = applyTheme(req, res)

  const from = req.body.from || today()
  const to = req.body.to || today()
  const timezone = req.body.timezone || "UTC"

  const body = {
    range: { from, to, timezone },
    grouping: ["campaign_group", "campaign_id", "campaign"],
    metrics: [
      "clicks",
      "conversions",
      "revenue",
      "leads",   // 👈 добавили
      "sales",    // 👈 добавили
      "cr"
    ],
    limit: 1000
  }

  try {
    const response = await fetch(KEITARO_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${KEITARO_TOKEN}`
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    console.log("KEITARO RESPONSE:", data)

    const rows = data.rows || []

    cachedReports = cachedReports.filter(r => r.date !== from)

    for (const row of rows) {
      console.log("ROW:", row)

      cachedReports.push({
        date: from,
        campaign: row.campaign || row.campaign_id || "Unknown",
        group:
          row.campaign_group ||
          row.campaign_group_name ||
          row.group ||
          "No group",
        rows: row
      })
    }

    res.redirect(`/keitaro?date=${from}&timezone=${timezone}`)
  } catch (err) {
    console.error(err)

    res.send(`${styles(theme)}
      <div class="container">
        ${themeToggle(theme)}
        <h1>Error fetching Keitaro report</h1>
        <p>${err.message}</p>
        <a href="/keitaro">Back</a>
      </div>
    `)
  }
})

//---Game---

app.get("/game", auth, (req, res) => {
  res.send(`
  <html>
  <head>
  <title>Secret Game</title>
  <style>
    body {
      margin:0;
      background:#111;
      overflow:hidden;
      font-family:Arial, sans-serif;
    }

    #ui {
      position:absolute;
      top:10px;
      left:10px;
      color:white;
      z-index:10;
      font-size:20px;
      text-shadow: 0 0 5px black;
    }

    #exit {
      position:absolute;
      top:10px;
      right:10px;
      z-index:10;
      padding:10px 20px;
      background:#e74c3c;
      color:white;
      border:none;
      cursor:pointer;
      border-radius:8px;
      box-shadow:0 0 10px rgba(0,0,0,0.5);
      transition:0.2s;
    }
    #exit:hover {
      background:#c0392b;
    }

    .map {
      width:2000px;
      height:2000px;
      background:linear-gradient(#2ecc71 0 100%), linear-gradient(90deg, #27ae60 0 100%);
      position:absolute;
      overflow:hidden;
    }

    .road {
      position:absolute;
      width:100%;
      height:100%;
      background-image:
        repeating-linear-gradient(#7f8c8d 0 50px, transparent 50px 100px),
        repeating-linear-gradient(90deg, #7f8c8d 0 50px, transparent 50px 100px);
      background-size:300px 300px;
      opacity:0.6;
    }

    .car, .enemy {
      width:50px;
      height:80px;
      position:absolute;
      border-radius:10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.5);
      transition: transform 0.05s linear;
    }

    .car {
      background:linear-gradient(to bottom, #e74c3c, #c0392b);
      border:2px solid #ff7979;
    }

    .enemy {
      background:linear-gradient(to bottom, #3498db, #2980b9);
      border:2px solid #5dade2;
    }

    .coin {
      width:25px;
      height:25px;
      background:radial-gradient(circle at 30% 30%, #ffe066, #f1c40f);
      border-radius:50%;
      position:absolute;
      box-shadow:0 0 15px #f1c40f, 0 0 25px rgba(255, 255, 0, 0.3);
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
  </head>

  <body>
    <div id="ui">
      💰 <span id="score">0</span> |
      🧩 Level: <span id="level">1</span>
    </div>

    <button id="exit" onclick="location.href='/'">EXIT</button>

    <div id="map" class="map">
      <div class="road"></div>
    </div>

    <script>
      let car, camera, enemies = [], coins = []
      let keys = {}
      let score = 0
      let level = 1
      let gameOver = false

      const map = document.getElementById("map")
      const scoreEl = document.getElementById("score")
      const levelEl = document.getElementById("level")

      onkeydown = e => keys[e.key.toLowerCase()] = true
      onkeyup = e => keys[e.key.toLowerCase()] = false

      const carEl = document.createElement("div")
      carEl.className="car"
      map.appendChild(carEl)

      function spawnCoins(n){
        coins.forEach(c=>c.el.remove())
        coins = []

        for(let i=0;i<n;i++){
          const el = document.createElement("div")
          el.className="coin"

          const coin = {
            el,
            x:Math.random()*1900,
            y:Math.random()*1900
          }

          el.style.left = coin.x+"px"
          el.style.top = coin.y+"px"

          map.appendChild(el)
          coins.push(coin)
        }
      }

      function spawnEnemies(n){
        enemies.forEach(e=>e.el.remove())
        enemies = []

        for(let i=0;i<n;i++){
          const el = document.createElement("div")
          el.className="enemy"

          const enemy = {
            el,
            x:Math.random()*1900,
            y:Math.random()*1900
          }

          map.appendChild(el)
          enemies.push(enemy)
        }
      }

      function restart(){
        car = { x:1000, y:1000, angle:0, vx:0, vy:0 }
        camera = { x:1000, y:1000 }

        score = 0
        level = 1
        gameOver = false

        scoreEl.innerText = score
        levelEl.innerText = level

        spawnCoins(10)
        spawnEnemies(2)
      }

      function nextLevel(){
        level++
        levelEl.innerText = level
        spawnCoins(10 + level*5)
        spawnEnemies(1 + level)
      }

      function isOnRoad(x,y){
        return (Math.floor(x/300)%2===0 || Math.floor(y/300)%2===0)
      }

      function loop(){

        if(gameOver){
          requestAnimationFrame(loop)
          return
        }

        if(keys["a"]) car.angle -= 3
        if(keys["d"]) car.angle += 3

        const rad = car.angle * Math.PI / 180
        let accel = isOnRoad(car.x, car.y) ? 0.4 : 0.2

        if(keys["w"]){
          car.vx += Math.sin(rad)*accel
          car.vy -= Math.cos(rad)*accel
        }

        if(keys["s"]){
          car.vx -= Math.sin(rad)*accel
          car.vy += Math.cos(rad)*accel
        }

        car.vx *= 0.97
        car.vy *= 0.97
        car.x += car.vx
        car.y += car.vy

        if(car.x < 0) car.x = 0, car.vx = 0
        if(car.y < 0) car.y = 0, car.vy = 0
        if(car.x > 2000) car.x = 2000, car.vx = 0
        if(car.y > 2000) car.y = 2000, car.vy = 0

        enemies.forEach(e=>{
          const dx = car.x - e.x
          const dy = car.y - e.y
          const dist = Math.sqrt(dx*dx+dy*dy)

          e.x += dx/dist * 1.5
          e.y += dy/dist * 1.5

          if(dist < 40){
            gameOver = true
            setTimeout(restart,2000)
          }

          e.el.style.left = e.x+"px"
          e.el.style.top = e.y+"px"
        })

        coins = coins.filter(c=>{
          const dx = c.x - car.x
          const dy = c.y - car.y

          if(Math.sqrt(dx*dx+dy*dy)<40){
            c.el.remove()
            score++
            scoreEl.innerText = score
            return false
          }
          return true
        })

        if(coins.length===0) nextLevel()

        camera.x += (car.x - camera.x)*0.1
        camera.y += (car.y - camera.y)*0.1

        map.style.transform =
          \`translate(\${-camera.x + window.innerWidth/2}px,
                      \${-camera.y + window.innerHeight/2}px)\`

        carEl.style.left = car.x+"px"
        carEl.style.top = car.y+"px"
        carEl.style.transform =
          \`translate(-50%,-50%) rotate(\${car.angle}deg)\`

        requestAnimationFrame(loop)
      }

      restart()
      loop()
    </script>
  </body>
  </html>
  `)
})



// ---------------- SERVER ----------------

app.listen(PORT,()=>console.log("Server running http://localhost:"+PORT))

// ---------------- MOLOCO API ----------------

async function getToken(){

 if(getToken.cached && Date.now()-getToken.time<3*24*60*60*1000)
 return getToken.cached

 const resp=await fetch("https://api.moloco.cloud/cm/v1/auth/tokens",{
 method:"POST",
 headers:{
 "accept":"application/json",
 "content-type":"application/json"
 },
 body:JSON.stringify({api_key:API_KEY})
 })

 const data=await resp.json()

 getToken.cached=data.token
 getToken.time=Date.now()

 return data.token

}

async function createReport(token,product_id,date){

 const resp=await fetch(
 `https://api.moloco.cloud/cm/v1/reports?ad_account_id=${AD_ACCOUNT_ID}`,
 {
 method:"POST",
 headers:{
 "accept":"application/json",
 "content-type":"application/json",
 "Authorization":`Bearer ${token}`
 },
 body:JSON.stringify({
 date_range:{start:date,end:date},
 ad_account_id:AD_ACCOUNT_ID,
 product_id,
 dimensions:["SKAN"]
 })
 })

 const data=await resp.json()

 return data.id

}

async function waitUntilReady(token,id){

 while(true){

 const resp=await fetch(
 `https://api.moloco.cloud/cm/v1/reports/${id}/status`,
 {headers:{Authorization:`Bearer ${token}`}}
 )

 const data=await resp.json()

 if(data.status==="READY")
 return data.location_json

 await new Promise(r=>setTimeout(r,3000))

 }

}

async function fetchRows(token,config,date){

 const report_id=await createReport(token,config.product_id,date)

 const url=await waitUntilReady(token,report_id)

 const json=await fetch(url)

 const data=await json.json()

 return data.rows||[]

}

// ---------------- FETCH ----------------

async function fetchSpendByApp(token, date) {
  const resp = await fetch(
    "https://api.moloco.cloud/cm/v1/analytics-overview",
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        date_range: {
          start: date,
          end: date
        },
        type: "USER_ACQUISITION",
        ad_account_id: AD_ACCOUNT_ID,
        dimensions: [
          "APP_OR_SITE_TITLE",
          "CAMPAIGN_TITLE",
          "CAMPAIGN_TARGET_COUNTRIES",
          "AD_ACCOUNT_TITLE"
        ],
        metrics: ["SPEND"]
      })
    }
  )

  const data = await resp.json()
  return data.rows || []
}


// ---------------- POST ----------------

app.post("/apps", auth, async (req, res) => {
  const startDate = req.body.startDate || today()
  const endDate = req.body.endDate || startDate

  try {
    const token = await getToken()

    const dates = []
    let current = new Date(startDate)

    while (current <= new Date(endDate)) {
      dates.push(current.toISOString().slice(0, 10))
      current.setDate(current.getDate() + 1)
    }

    // удалить старые данные
    await prisma.appSpend.deleteMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    })

    // загрузка + сохранение
    for (const date of dates) {
      const rows = await fetchSpendByApp(token, date)

      await prisma.appSpend.createMany({
        data: rows.map(r => ({
          date,

          app_name: r.app?.title || "Unknown",

          campaign_name: r.campaign?.title || "Unknown",

          country: r.campaign?.target_countries?.[0] || "Unknown",

          ad_account: r.ad_account?.title || "Unknown",

          spend: Number(r.metric?.spend || 0)
        }))
      })
    }

    res.redirect(`/apps?startDate=${startDate}&endDate=${endDate}`)
  } catch (err) {
    res.send("Apps save error: " + err.message)
  }
})

// ---------------- PARSE CSV ----------------

function parseCSV(text) {
  text = text.replace(/^\uFEFF/, "")

  const lines = text.trim().split("\n")
  const headers = lines[0].split(",")

  return lines.slice(1).map(line => {
    const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)

    const obj = {}

    headers.forEach((h, i) => {
      obj[h.trim()] = values[i]?.replace(/^"|"$/g, "")
    })

    return obj
  })
}


// ---------------- FETCH UNITY ----------------

async function fetchUnityStats(start, end) {
  const url = `https://services.api.unity.com/advertise/stats/v2/organizations/${UNITY_ORG_ID}/reports/acquisitions?start=${start}&end=${end}&scale=day&metrics=spend&breakdowns=app,campaign,country`

  const resp = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": "Basic " + Buffer.from(
        `${UNITY_USER}:${UNITY_PASS}`
      ).toString("base64"),
      "Accept": "text/csv"
    }
  })

  const text = await resp.text()

  if (!resp.ok) {
    throw new Error(`Unity API Error ${resp.status}: ${text}`)
  }

  if (!text) {
    throw new Error("Unity API returned empty response")
  }

  return parseCSV(text)
}


// ---------------- SAVE UNITY REPORT ----------------

app.post("/unity", auth, async (req, res) => {
  const start = req.body.start || today()
  const end = req.body.end || start

  try {
    const rows = await fetchUnityStats(start, end)

    const formatted = rows.map(r => ({
      date: r["timestamp"],
      app_id: r["app id"],
      app_name: r["app name"],
      campaign_name: r["campaign name"],
      country_unity: r["country"],
      spend: Number(r["spend"] || 0)
    }))

    // удалить старые данные за диапазон
    await prisma.unityReport.deleteMany({
      where: {
        date: {
          gte: start,
          lte: end
        }
      }
    })

    // сохранить новые
    for (const r of formatted) {
      await prisma.unityReport.create({
        data: r
      })
    }

    res.redirect(`/unity?start=${start}&end=${end}`)

  } catch (err) {
    res.send("Unity save error: " + err.message)
  }
})

function pushLog(type, args) {
  const time = new Date().toISOString()
  const msg = args.map(a =>
    typeof a === "object" ? JSON.stringify(a) : a
  ).join(" ")

  const line = `[${time}] [${type}] ${msg}`

  LOGS.push(line)

  if (LOGS.length > MAX_LOGS) {
    LOGS.shift()
  }
}

const origLog = console.log
const origErr = console.error
const origWarn = console.warn

console.log = (...args) => {
  pushLog("LOG", args)
  origLog(...args)
}

console.error = (...args) => {
  pushLog("ERROR", args)
  origErr(...args)
}

console.warn = (...args) => {
  pushLog("WARN", args)
  origWarn(...args)
}

app.get("/render-stream", auth, (req, res) => {

  res.setHeader("Content-Type", "text/event-stream")
  res.setHeader("Cache-Control", "no-cache")
  res.setHeader("Connection", "keep-alive")

  // віддаємо старі логи
  LOGS.forEach(line => {
    res.write(`data: ${line}\n\n`)
  })

  // кожну секунду пушимо нові
 const interval = setInterval(() => {
  const stats = getSystemStats()

  const payload = {
    log: LOGS[LOGS.length - 1] || "",
    stats
  }

  res.write(`data: ${JSON.stringify(payload)}\n\n`)
}, 1000)

  req.on("close", () => {
    clearInterval(interval)
  })
})
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: false
});
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// чтобы не спамить одинаковыми статусами
const lastStatus = {};

app.post("/webhook", async (req, res) => {
  const data = req.body;

  console.log("📩 WEBHOOK:", JSON.stringify(data));

  // универсальный парсинг (UptimeMonitorX может слать по-разному)
  const url =
    data.url ||
    data.monitor_url ||
    data.target ||
    data.name ||
    "unknown";

  const statusRaw =
    data.status ||
    data.state ||
    data.alert_type ||
    "unknown";

  const region =
    data.location ||
    data.region ||
    data.check_location ||
    "unknown";

  const error =
    data.error ||
    data.reason ||
    "";

  const status = String(statusRaw).toLowerCase();

  const key = `${url}_${region}`;

  // анти-спам
  if (lastStatus[key] === status) {
    return res.send("skip");
  }

  lastStatus[key] = status;

  const time = new Date().toLocaleString();

  let text = "";

  if (status.includes("down") || status.includes("fail")) {
    text =
`❌ DOWN
${url}
🌍 Geo: ${region}
⏱ ${time}
${error}`;
  }

  if (status.includes("up") || status.includes("ok")) {
    text =
`✅ UP
${url}
🌍 Geo: ${region}
⏱ ${time}`;
  }

  if (text) {
    try {
      await bot.sendMessage(CHAT_ID, text, { parse_mode: "HTML" });
    } catch (e) {
      console.error("Telegram error:", e.message);
    }
  }

  res.send("ok");
});


