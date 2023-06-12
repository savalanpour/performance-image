import path from "path";
import * as XLSX from "xlsx";

export default function handler(req, res) {
  if (req.method === "POST") {
    const json = req.body;
    const sheetName = json.sheetName; // Assuming sheetName is provided in the request body
    const jsonData = json.data;

    // Read the existing Excel file
    const filePath = path.join(process.cwd(), "public", "file.xlsx");
    const workbook = XLSX.readFile(filePath);

    let ws = workbook.Sheets[sheetName];
    let isNewSheet = false;

    if (!ws) {
      ws = XLSX.utils.json_to_sheet([]);
      const header = Object.entries(jsonData).map(([key]) => key);
      XLSX.utils.sheet_add_aoa(ws, [header]);
      isNewSheet = true;
    }

    const range = XLSX.utils.decode_range(ws["!ref"]);
    const lastRow = range.e.r;
    const newRow = lastRow + 1;
    //Starting in the second row to avoid overriding and skipping headers
    XLSX.utils.sheet_add_json(ws, [jsonData], {
      origin: { r: newRow, c: range.s.c },
      skipHeader: true,
    });

    if (isNewSheet) {
      XLSX.utils.book_append_sheet(workbook, ws, sheetName);
    }

    // Write the updated workbook to the file
    XLSX.writeFile(workbook, filePath);

    res.status(200).json({
      message:
        "Data added to the specified sheet in the Excel file successfully.",
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
