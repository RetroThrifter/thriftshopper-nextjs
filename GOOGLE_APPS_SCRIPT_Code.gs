/**
 * Google Apps Script Webhook Handler for ThriftShopper Waitlist
 * 
 * This script receives POST requests from the Next.js API and writes data to Google Sheets.
 * 
 * IMPORTANT:
 * 1. Replace getActiveSpreadsheet() with openById() to target the specific sheet
 * 2. Deploy as a NEW VERSION of the web app
 * 3. Use the /exec URL from the NEW deployment
 */

function doPost(e) {
  try {
    // Log that the function was called
    Logger.log("doPost called at: " + new Date().toISOString());
    
    // Safely log parameters
    if (e && e.parameter) {
      Logger.log("Parameters received: " + JSON.stringify(e.parameter));
    } else {
      Logger.log("No parameters received or e is undefined");
      Logger.log("e object: " + JSON.stringify(e));
    }
    
    // Open the specific spreadsheet by ID (not getActiveSpreadsheet)
    const ss = SpreadsheetApp.openById("1i7uvyTFRnmAtY9E-e6XkOnpY2VCBKKLHzAcXaijuKiM");
    
    // Get or create the "Signups" sheet
    const sheet = ss.getSheetByName("Signups") || ss.insertSheet("Signups");
    
    // Parse form data from the POST request - handle case where e.parameter might be undefined
    const params = (e && e.parameter) ? e.parameter : {};
    
    // Extract data (form data comes as URL-encoded parameters)
    const timestamp = params.timestamp || new Date().toISOString();
    const email = params.email || "";
    const first_name = params.first_name || "";
    const last_name = params.last_name || "";
    const role_interest = params.role_interest || "";
    const zipcode = params.zipcode || "";
    const early_beta_opt_in = params.early_beta_opt_in || "";
    const source = params.source || "";
    const page = params.page || "";
    
    Logger.log("Processing signup for email: " + email);
    
    // Append row to the sheet
    // Adjust column order to match your sheet headers
    sheet.appendRow([
      timestamp,
      email,
      first_name,
      last_name,
      role_interest,
      zipcode,
      early_beta_opt_in,
      source,
      page
    ]);
    
    Logger.log("Row appended successfully for email: " + email);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Data written to sheet successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    Logger.log("Error stack: " + error.stack);
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
