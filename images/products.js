
const req = new XMLHttpRequest();
let main_body = document.getElementById('main_body');

req.open('get', 'products.do?collect=1', true);

req.addEventListener('readystatechange', () => {
    if(req.readyState==4 && req.status==200) {
        let res = JSON.parse(req.responseText);
        // console.log(res);
        

        for(let obj of res){

            console.log(obj);
            
            let product_box = document.createElement('div');
            product_box.className = "product_box";
            main_body.append(product_box);

            let img_box = document.createElement("div");
            img_box.className = "img_box";
            product_box.append(img_box);

            // let img = document.createElement('img');
            // img.className = "product_img";
            // img.src = "static/media/images/logo.jpg";
            // img_box.append(img);

            let record = document.createElement("div");
            record.className = "record";
            product_box.append(record);


            for(let prop in obj){
                switch (prop) {
                    case "pic":
                        let product_img = document.createElement("img");
                        product_img.className = "product_img";
                        product_img.src = "show_product_pic.do?pic=" + obj[prop];
                        img_box.append(product_img);
                        break;

                    case "productName" :
                        let productName = document.createElement("div");
                        productName.className = "product_name";
                        productName.innerText = obj[prop];
                        record.append(productName);
                        break;
                    
                    case "price" :
                        let box1 = document.createElement("div");
                        let spn1 = document.createElement("span");
                        spn1.innerText = "Price : " ;
                        box1.append(spn1);
                        box1.innerHTML += obj[prop];
                        record.append(box1);
                        break;

                    case "quantity" :
                        let box2 = document.createElement("div");
                        let spn2 = document.createElement("span");
                        spn2.innerText = "Quantity/Sold : ";
                        box2.append(spn2);
                        box2.innerHTML += obj[prop];
                        record.append(box2);
                        break;

                    case "sold" :
                        let box
                
                    default:
                        break;
                }
            }

        }
    }
});

req.send();
// alert('+++++++++');
