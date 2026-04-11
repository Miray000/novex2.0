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

.keitaro_hre{
color:${buttonTex};
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
<a href="/keitaro">Keitaro</a>
<a href="/apps">Moloko Spend</a>
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
    <div class="topbar"><a href="/">Home</a><a href="/chart">Charts</a><a href="/keitaro">Keitaro</a><a href="/apps">Moloko Spend</a><a href="/logout">Logout</a></div>
  <h1>Saved Reports</h1>

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

// ---------------- APPS ----------------

app.get("/apps", auth, async (req, res) => {
  const theme = applyTheme(req, res)

  const startDate = req.query.startDate || today()
  const endDate = req.query.endDate || startDate

  // 👉 берем из БД
  const records = await prisma.appSpend.findMany({
    where: {
      date: {
        gte: startDate,
        lte: endDate
      }
    }
  })

  // 👉 список дат
  const dates = []
  let current = new Date(startDate)

  while (current <= new Date(endDate)) {
    dates.push(current.toISOString().slice(0, 10))
    current.setDate(current.getDate() + 1)
  }

  // 👉 структура
  const appData = {}

  records.forEach(r => {
    if (!appData[r.app_name]) appData[r.app_name] = {}
    appData[r.app_name][r.date] = r.spend
  })

  // 👉 сортировка
  const appTotals = Object.entries(appData).map(([app, data]) => {
    const total = Object.values(data).reduce((a, b) => a + b, 0)
    return { app, total, data }
  }).sort((a, b) => b.total - a.total)

  // 👉 таблица
  let header = `<tr><th>App</th>`
  dates.forEach(d => header += `<th>${d}</th>`)
  header += `<th>Total</th></tr>`

  let rowsHtml = appTotals.map(obj => {
    let row = `<tr><td>${obj.app}</td>`

    dates.forEach(d => {
      const val = obj.data[d] || 0
      row += `<td>$${val.toFixed(2)}</td>`
    })

    row += `<td><b>$${obj.total.toFixed(2)}</b></td></tr>`
    return row
  }).join("")

  const grandTotal = appTotals.reduce((sum, a) => sum + a.total, 0)

  res.send(`
    ${styles(theme)}
    ${themeToggle(theme)}

    <div class="container">

      <h1>Spend by App (DB)</h1>

      <a href="/">Home</a>
      <a href="/logs">Logs</a>
      <a href="/chart">Charts</a>
      <a href="/keitaro">Keitaro</a>
    <!-- <a href="/unity">Unity</a>  -->
      <a href="/logout">Logout</a>

      <!-- FILTER -->
      <form method="GET">
        From <input type="date" name="startDate" value="${startDate}">
        To <input type="date" name="endDate" value="${endDate}">
        <input type="hidden" name="theme" value="${theme}">
        <button>Show</button>
      </form>

      <!-- GENERATE -->
      <form method="POST">
        Generate From <input type="date" name="startDate" value="${startDate}">
        To <input type="date" name="endDate" value="${endDate}">
        <button>Load from Moloco</button>
      </form>

      <h2>Total Spend: $${grandTotal.toFixed(2)}</h2>

      <table>
        ${header}
        ${rowsHtml}
      </table>

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

 <div class="container">

 ${themeToggle(theme)}
 <a href="/">Home</a>
 <a href="/logs">Logs</a>
 <a href="/keitaro">Keitaro</a>
 <a href="/apps">Moloko Spend</a>
 <a href="/logout">Logout</a>
 <h1>Charts</h1>



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

// ---------------- UNITY PAGE ----------------

app.get("/unity", auth, async (req, res) => {
  const theme = applyTheme(req, res)

  const start = req.query.start || today()
  const end = req.query.end || start

  const reports = await prisma.unityReport.findMany({
    where: {
      date: {
        gte: start,
        lte: end
      }
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

    <div class="container">

      <h1>Unity Reports</h1>

      <a href="/">Home</a>
      <a href="/logs">Logs</a>
      <a href="/chart">Charts</a>
      <a href="/keitaro">Keitaro</a>
      <a href="/apps">Moloko Spend</a>
      <a href="/logout">Logout</a>

      <!-- FILTER -->
      <form method="GET">
        From <input type="date" name="start" value="${start}">
        To <input type="date" name="end" value="${end}">
        <input type="hidden" name="theme" value="${theme}">
        <button>Show</button>
      </form>

      <!-- GENERATE -->
      <form method="POST">
        Generate From <input type="date" name="start" value="${start}">
        To <input type="date" name="end" value="${end}">
        <button>Load from Unity</button>
      </form>

      <h2>Total Spend: $${total.toFixed(2)}</h2>

      <table>
        <tr>
          <th>Date</th>
          <th>App ID</th>
          <th>App Name</th>
          <th>Spend</th>
        </tr>

        ${reports.map(r => `
          <tr>
            <td>${r.date}</td>
            <td>${r.app_id}</td>
            <td>${r.app_name}</td>
            <td>$${r.spend.toFixed(6)}</td>
          </tr>
        `).join("")}

      </table>

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

    return `<tr>
      <td>${r.campaign}</td>
      <td>${r.group || "-"}</td>
      <td>${m.leads ?? 0}</td>
      <td>${m.sales ?? 0}</td>
      <td>${m.clicks ?? 0}</td>
      <td>${m.conversions ?? 0}</td>
      <td>${m.revenue ?? 0}</td>
    </tr>`
  }).join("")

  res.send(`
    ${styles(theme)}
    ${themeToggle(theme)}

    <div class="container">
      <h1>Keitaro Dashboard (${dateFilter})</h1>

      <a href="/">Home</a>
      <a href="/logs">Logs</a>
      <a href="/chart">Charts</a>
         <a href="/apps">Moloko Spend</a>
      <a href="/logout">Logout</a>

      <!-- FETCH -->
      <form method="POST" action="/keitaro/fetch">
        <label>From</label>
        <input type="date" name="from" value="${dateFilter}">

        <label>To</label>
        <input type="date" name="to" value="${dateFilter}">

        <label>Timezone</label>
        <select name="timezone">
          <option value="UTC" ${timezone==="UTC"?"selected":""}>UTC</option>
          <option value="GMT+2:00" ${timezone==="GMT+2:00"?"selected":""}>GMT+2:00</option>
          <option value="GMT+3:00" ${timezone==="GMT+3:00"?"selected":""}>GMT+3:00</option>
        </select>

        <button>Generate Report</button>
      </form>

      <!-- FILTER DATE -->
      <h2>Filter by Date</h2>
      <form method="GET" action="/keitaro">
        <input type="date" name="date" value="${dateFilter}">
        <input type="hidden" name="timezone" value="${timezone}">
        <input type="hidden" name="group" value="${groupFilter}">
        <button>Filter</button>
      </form>

      <!-- FILTER GROUP -->
      <h2>Filter by Group</h2>
      <form method="GET" action="/keitaro">
        <select name="group">
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
          <th>Campaign</th>
          <th>Group</th>

          <th>
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=leads&dir=${sortMetric==='leads'?nextDir(sortDir):'desc'}">
              Leads
            </a>
          </th>

          <th>
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=sales&dir=${sortMetric==='sales'?nextDir(sortDir):'desc'}">
              Sales
            </a>
          </th>

          <th>
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=clicks&dir=${sortMetric==='clicks'?nextDir(sortDir):'desc'}">
              Clicks
            </a>
          </th>

          <th>
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=conversions&dir=${sortMetric==='conversions'?nextDir(sortDir):'desc'}">
              Conversions
            </a>
          </th>

          <th>
            <a class="keitaro_hre" href="?date=${dateFilter}&timezone=${timezone}&group=${groupFilter}&sort=revenue&dir=${sortMetric==='revenue'?nextDir(sortDir):'desc'}">
              Revenue
            </a>
          </th>
        </tr>

        ${tableRows}
      </table>
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
      "sales"    // 👈 добавили
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

async function fetchSpendByApp(token, date){

 const resp = await fetch(
  "https://api.moloco.cloud/cm/v1/analytics-detail",
  {
   method: "POST",
   headers: {
    "accept": "application/json",
    "content-type": "application/json",
    "Authorization": `Bearer ${token}`
   },
   body: JSON.stringify({
    date_range: { start: date, end: date },
    ad_account_id: AD_ACCOUNT_ID,
    timezone: "UTC+3",
    metrics: ["SPEND"],
    dimensions: ["APP_OR_SITE_TITLE"]
   })
  }
 )

 const data = await resp.json()
 return data.rows || []
}

app.post("/apps", auth, async (req, res) => {
  const startDate = req.body.startDate || today()
  const endDate = req.body.endDate || startDate

  try {
    const token = await getToken()

    // 👉 список дат
    const dates = []
    let current = new Date(startDate)

    while (current <= new Date(endDate)) {
      dates.push(current.toISOString().slice(0, 10))
      current.setDate(current.getDate() + 1)
    }

    // 👉 удалить старые данные
    await prisma.appSpend.deleteMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate
        }
      }
    })

    // 👉 собрать и сохранить
    for (const date of dates) {
      const rows = await fetchSpendByApp(token, date)

      for (const r of rows) {
        await prisma.appSpend.create({
          data: {
            date,
            app_name: r.app?.title || "Unknown",
            spend: Number(r.metric?.spend || 0)
          }
        })
      }
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
  const url = `https://services.api.unity.com/advertise/stats/v2/organizations/${UNITY_ORG_ID}/reports/acquisitions?start=${start}&end=${end}&scale=day&metrics=spend&breakdowns=app`

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
      spend: Number(r["spend"] || 0)
    }))

    // 👉 удалить старые данные за диапазон
    await prisma.unityReport.deleteMany({
      where: {
        date: {
          gte: start,
          lte: end
        }
      }
    })

    // 👉 сохранить новые
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
