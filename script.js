// import data from "./data.json";
const data = [
    {
        eventTemplateId:
            "PROMOTION_MATERIAL_DEADLINE_STUDENT_EXCITEDMENT_PPTX_PRESENTED",
        "count()": "14",
    },
    {
        eventTemplateId: "PROMOTION_MATERIAL_DEADLINE_POSTERS_HUNG",
        "count()": "1",
    },
];

function constructTable(selector) {
    // Getting the all column names
    var cols = Headers(data, selector);

    // Traversing the JSON data
    for (var i = 0; i < data.length; i++) {
        var row = $("<tr/>");
        for (var colIndex = 0; colIndex < cols.length; colIndex++) {
            var val = data[i][cols[colIndex]];

            // If there is any key, which is matching
            // with the column name
            if (val == null) val = "";
            row.append($("<td/>").html(val));
        }

        // Adding each row to the table
        $(selector).append(row);
    }
}

function Headers(data, selector) {
    var columns = [];
    var header = $("<tr/>");

    for (var i = 0; i < data.length; i++) {
        var row = data[i];

        for (var k in row) {
            if ($.inArray(k, columns) == -1) {
                columns.push(k);

                // Creating the header
                header.append($("<th/>").html(k));
            }
        }
    }

    // Appending the header to the table
    $(selector).append(header);
    return columns;
}
