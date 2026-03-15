import 'dotenv/config'
import express from "express"
import fetch from "node-fetch"
import cookieParser from "cookie-parser"
import { PrismaClient } from "./generated/prisma/client.js"
import { PrismaPg } from "@prisma/adapter-pg"

const connectionString = process.env.DATABASE_URL
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

const app = express()
const PORT = process.env.PORT || 3000

// ---------------- CONFIG ----------------

const LOGIN="admin"
const PASSWORD="novex2026"

const API_KEY=process.env.API_KEY
const AD_ACCOUNT_ID=process.env.AD_ACCOUNT_ID

const REPORT_CONFIGS=[
 {name:"Greek",product_id:"JdKstbdrGyu6rG43"},
 {name:"777 Spark",product_id:"RzsypCQ4XMZZAB39"},
 {name:"Big Win Charge",product_id:"s9mpuudmBBTdJ2mo"},
 {name:"Royal Fruits Tap",product_id:"nLNpT49D2fyj3Zyq"}
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
  return `<div class="theme-toggle"><a href="?${params}&theme=light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="orange">
  <circle cx="12" cy="12" r="5"/>
  <g stroke="orange" stroke-width="2">
    <line x1="12" y1="1" x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="23"/>
    <line x1="1" y1="12" x2="4" y2="12"/>
    <line x1="20" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
  </g>
</svg></a></div>`
 }

 return `<div class="theme-toggle"><a href="?${params}&theme=dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="yellow">
  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
</svg></a></div>`

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
 const buttonBg=dark?"#0ff":"#B19CD9"
 const buttonTex=dark?"black":"white"
  const buttonHov=dark?"#00cccc":"#C4B4E0"

 return `
 <style>

 body{
 font-family:Arial;
 background:${bg};
 color:${text};
 margin:0;
 padding:40px;
 }

 .container{
 max-width:1200px;
 margin:auto;
 }

 a{
 color:${link};
 text-decoration:none;
 margin-right:15px;
 }

 button{
 background:${buttonBg};
 border:none;
 padding:10px 20px;
 border-radius:8px;
 cursor:pointer;
 color:${buttonTex};
 }

 button:hover{
 background:${buttonHov};
 }

 input,select{
 padding:8px;
 margin:5px;
 border-radius:6px;
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

 .stats{
 display:grid;
 grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
 gap:20px;
 margin-bottom:30px;
 }

 .stat{
 background:${tableBg};
 border:1px solid ${link};
 padding:20px;
 border-radius:12px;
 text-align:center;
 }

 .theme-toggle{
 position:fixed;
 top:20px;
 right:20px;
 }
.log-form{
display:flex;
justify-content:center;
text-align:center;
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
 </style>
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
<div class="container">
${themeToggle(theme)}
<a href="/logs">Logs</a>
<a href="/chart">Charts</a>
<a href="/logout">Logout</a>

<h1>Moloco Dashboard</h1>

<form>
Date <input type="date" name="date" value="${selectedDate}">
Product <select name="product">${productOptions}</select>
<input type="hidden" name="theme" value="${theme}">
<button>Show</button>
</form>

<form method="POST">
Generate report <input type="date" name="reportDate" value="${selectedDate}">
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

  let html = `${styles(theme)}<div class="container">
  ${themeToggle(theme, `date=${date}&product=${product}&percent=${percent}`)}
  <h1>Saved Reports</h1>
  <div class="topbar"><a href="/">Home</a><a href="/chart">Charts</a><a href="/logout">Logout</a></div>
  <form method="GET">
    <label>Дата</label>
    <input type="date" name="date" value="${date}">
    <label>Додаток</label>
    <select name="product">
      <option value="">All</option>
      <option ${product === "Greek" ? "selected" : ""}>Greek</option>
      <option ${product === "777 Spark" ? "selected" : ""}>777 Spark</option>
      <option ${product === "Big Win Charge" ? "selected" : ""}>Big Win Charge</option>
      <option ${product === "Royal Fruits Tap" ? "selected" : ""}>Royal Fruits Tap</option>
    </select>
    <label>-% спенду</label>
    <input type="number" name="percent" value="${percent}" placeholder="% spend">
    <input type="hidden" name="theme" value="${theme}">
    <button>Filter</button>
  </form>
  <table>
    <tr><th>Date</th><th>Product</th><th>Rows</th><th>Open</th></tr>`

  reports.forEach(r => {
    html += `<tr>
      <td>${r.date}</td>
      <td>${r.product}</td>
      <td>${parseRows(r.rows).length}</td>
      <td><a href="/report?id=${r.id}&percent=${percent}&theme=${theme}">Open</a></td>
    </tr>`
  })

  html += "</table></div>"
  res.send(html)
})

// ---------------- REPORT ----------------
app.get("/report", auth, async (req, res) => {
  const theme = applyTheme(req, res)  // применяем тему
  const id = Number(req.query.id)
  const percent = Number(req.query.percent || 0)
  const report = await prisma.report.findUnique({ where: { id } })
  if (!report) return res.send("Not found")

  res.send(`${styles(theme)}<div class="container">
    ${themeToggle(theme, `id=${id}&percent=${percent}`)}
    <h1>${report.product} (${report.date})</h1>
    <div class="topbar"><a href="/logs?theme=${theme}">Back</a><a href="/logout">Logout</a></div>
    ${buildTable(report.rows, percent)}
  </div>`)
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

 <div class="container">

 ${themeToggle(theme)}

 <h1>Charts</h1>

 <a href="/">Home</a>
 <a href="/logs">Logs</a>
 <a href="/logout">Logout</a>

 <form>

 Metric

 <select name="metric">

 <option value="spend">Spend</option>
 <option value="clicks">Clicks</option>
 <option value="installs">Installs</option>
 <option value="impressions">Impressions</option>

 </select>

 Product

 <select name="product">${productOptions}</select>

 From <input type="date" name="startDate" value="${startDate}">
 To <input type="date" name="endDate" value="${endDate}">

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

// ---------------- LOGOUT ----------------

app.get("/logout",(req,res)=>{
 res.clearCookie("auth")
 res.redirect("/login")
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
