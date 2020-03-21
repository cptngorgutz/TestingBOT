const { google } = require("googleapis");
const auth = require("./credentials-load");

async function run() {
  //create sheets client
  const sheets = google.sheets({ version: "v4", auth });
  //get a range of values
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: "1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw",
    range: "Sheet1!A13"
  });
  //print results
  console.log(JSON.stringify(res.data, null, 2));
}

run().catch(err => console.error("ERR", err));
