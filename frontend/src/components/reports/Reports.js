import jsreport from '@jsreport/browser-client'

jsreport.serverUrl = 'http://localhost:5488/'
const Reports = () => {
const generateReport = async () => {
    const report = await jsreport.render({
        template: {

          shortid: '_51B-3VIey'    
        },
        data: {
          someData: 'hello'
          
        },
        
      })
      // download the output to the file
      // report.download('myreport.pdf')
      
      // open output in the new window
      report.openInWindow({ title: 'myreport' })
}
return (
  <div>
    <button onClick={generateReport}>Generate Report</button>
  </div>
)

}

export default Reports;