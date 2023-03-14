document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://docs.google.com/spreadsheets/d/';
    const ssid = '1ylE-7eTtdZo7PJsnVk-5ZklfyI1PHBY8vv7iJR5EFLA';
    const q1 = '/gviz/tq?';
    const q2 = 'tqx=out:json';
    const q3 = 'sheet=Inventario 7_3_23';
    let url1 = `${url}${ssid}${q1}&${q2}&${q3}`;

    fetch(url1)
        .then(response => response.text())
        .then(data => {
            var table = document.querySelector('.table');
            var mainrow = document.querySelector('.mainrow');
            var header = document.createElement('tr');
            const json = JSON.parse(data.substr(47).slice(0, -2));
            console.log(json.table);


            json.table.rows.forEach((row) => {
                console.log(col)
                var col = document.createElement('div');
                col.className = 'col';

                var cardDiv = document.createElement('div');
                cardDiv.className = 'card';

                var cardImg = document.createElement('img');
                cardImg.className = 'card-img-top';
                cardImg.setAttribute('src', "https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-PDP-R01a_1400x.jpg?v=1644857333");
                // cardImg.setAttribute('width', "100%");
                cardImg.setAttribute('height', 100);
              

                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = row.c[0]?.v;

                var cardDesc = document.createElement('p');
                cardDesc.className = 'card-text';
                cardDesc.textContent = "Descripción: " + row.c[1]?.v ;
             
                var cardCant = document.createElement('p');
                cardCant.className = 'card-text';
                cardCant.textContent = "Stock: " + row.c[4]?.v ;

                mainrow.appendChild(col);
                col.appendChild(cardDiv);
                cardBody.appendChild(cardImg);
                cardDiv.appendChild(cardBody);
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardDesc);
                cardBody.appendChild(cardCant);
                // header.innerHTML = "<th>" + json.table.cols[0].label + "</th><th>" + json.table.cols[1].label + "</th><th>" + json.table.cols[4].label + "</th>";
                // table.appendChild(header);
            })
            // json.table.rows.forEach((row) => {
            //     // console.log(row.c);
            //     var newRow = document.createElement('tr');
            //     newRow.innerHTML = "<td>" + row.c[0]?.v + "</td><td>" + row.c[1]?.v + "</td><td>" + row.c[4]?.v + "</td>";
            //     table.appendChild(newRow);
            //     row.c.forEach((cell) => {
            //         // console.log(cell)
            //     })
            // })
        });
});
