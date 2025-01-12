const add = document.querySelector(".add");

const box = document.querySelector(".box");
let ArrCard = [
    {
        image: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
        name: "$2,695",
        name1: "Best of Salzburg & Vienna in 8 Days Tour" ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nihil, corrupti temporibus ipsa quasi nulla? Facere laboriosam atque est dicta itaque. Consequuntur cum dolore aliquid repellat tempora nulla iure porro.",
        button:"Rondom color"
    },
    {
        image: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
        name: "$2,095",
        name1: "Best Of Rome In 7 Days <br> Tour",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nihil, corrupti temporibus ipsa quasi nulla? Facere laboriosam atque est dicta itaque. Consequuntur cum dolore aliquid repellat tempora nulla iure porro.",
        button:"Rondom color"
    },
    {
        image: "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
        name: "$2,595",
        name1: "Best Of Poland In 10 Days Tour",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nihil, corrupti temporibus ipsa quasi nulla? Facere laboriosam atque est dicta itaque. Consequuntur cum dolore aliquid repellat tempora nulla iure porro.",
        button:"Rondom color"
    }
]
function get() {
    ArrCard.forEach((e,i) => {
        let card = document.createElement("div")
        let card1 = document.createElement("div")
        card.classList.add("card")
        let image = document.createElement("img");
        image.classList.add("image")
        let name = document.createElement("h3");
        name.classList.add("carr"+i);
        let name1 = document.createElement("h2");
        let description = document.createElement("p");
        description.classList.add("description");
        let button = document.createElement("button");
        button.classList.add("button"+i);
        image.src = e.image;
        name.innerHTML = e.name;
        name1.innerHTML = e.name1;
        description.innerHTML = e.description;
        button.innerHTML = e.button;
        card1.classList.add("car"+i);
        card.append(image,name,name1,description,button,card1);
        box.append(card);
        let cn =['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
            '#CC0033', '#993366', '#FFFFCC', '#8066E6', '#FFCCB3', '#CC0080', '#4DB300', '#CC3366', '#338033', '#FF80FF',
            '#1AB333', '#804D99', '#80FF4D', '#00FF80', '#803380', '#994D99', '#66CCFF', '#CC6699', '#CCFF80', '#FF1A99',
            '#809999', '#994D66', '#FF801A', '#E6FF66', '#66801A', '#B34D00', '#668099', '#CCB300', '#804DE6', '#33B399',
            '#80FF66', '#1A80FF', '#CC334D', '#FF661A', '#FF4D80', '#66804D', '#3380CC', '#1ACC66', '#80661A', '#1A9966',
            '#E6E6E6', '#33E6B3', '#CCCC4D', '#00991A', '#E6CC33', '#80B3CC', '#1ACC99', '#1A8000', '#CC80FF', '#3380FF',
            '#33CC99', '#3366FF', '#806666', '#FFCC4D', '#669900', '#FF9900', '#CC33FF', '#99FFCC', '#4DB399', '#801A80',
            '#99CCB3', '#00E6E6', '#B3331A', '#99CC1A', '#FF4DCC', '#80CC1A', '#B34D33', '#66B34D', '#804DCC', '#B39900',
            '#B3B380', '#B36600', '#CCE6FF', '#00E6B3', '#FF994D', '#8099CC', '#FF33B3', '#9966B3', '#E6B300', '#CCB399',
            '#3399CC', '#994DB3', '#CCB366', '#1ACCE6', '#66B31A', '#B34D80', '#FF8000', '#80FF33', '#E64D1A', '#B366E6',
            '#E6CC00', '#FF664D', '#E666E6', '#9999B3', '#336699', '#809966', '#801A66', '#33E680', '#99E699', '#E6CCB3',
            '#1A99E6', '#664DB3', '#E6991A', '#B3E6E6', '#4D6680', '#1AB300', '#66E680', '#99664D', '#E6E680', '#E6E6FF',
            '#00B3B3', '#B3CC1A', '#8099B3', '#66CC80', '#E6334D', '#B36680', '#B3FFFF', '#B3B3CC', '#80FFFF', '#4DCC33',
            '#E6FF33', '#668033', '#3399B3', '#336633', '#B3B34D', '#B34DB3', '#4DB31A', '#CC99E6', '#E69966', '#4DE6B3',
            '#FFB3E6', '#CC9980', '#664D00', '#B33366', '#FFB333', '#E699CC', '#FF331A', '#6680FF', '#E6E6CC', '#1AE699',
            '#99B31A', '#4D804D', '#6699E6', '#FF3366', '#E69999', '#E699E6', '#80CCCC', '#CC99FF', '#1AB3E6', '#E64DB3',
            '#CC6666', '#4DB333', '#B3B333', '#B3804D', '#B3FF66', '#B3991A', '#80E666', '#66B3CC', '#CC4D99', '#4D9966',
            '#CC4D66', '#CCCCCC', '#1A9980', '#CC4D33', '#80FFB3', '#804D33', '#E6E61A', '#B3664D', '#CCE633', '#66CC66',
            '#3366B3', '#B31A66', '#999900', '#FF66E6', '#CCE699', '#B36633', '#FF804D', '#80991A', '#B39933', '#FFFFE6',
            '#FFE666', '#99B366', '#CC9966', '#1ACC80', '#B38000', '#00B3FF', '#9966E6', '#4DE680', '#FFFF1A', '#33E64D',
            '#66FF4D', '#E6CC4D', '#B3B3E6', '#E680FF', '#FF4D1A', '#808000', '#E66600', '#80B3B3', '#669966', '#996666',
            '#B38033', '#80FFCC', '#B3CC00', '#CCB31A', '#4D8099', '#FF991A', '#CCE600', '#80E6FF', '#CC66B3', '#998099',
            '#B3FF1A', '#80B399', '#8000FF', '#99E64D', '#66CCCC', '#E66666', '#80CC80', '#B380B3', '#B34D66', '#1A99FF',
            '#80E6E6', '#666699', '#4DE633', '#99FFE6', '#E60080', '#B399FF', '#99801A', '#4D3366', '#66FF00', '#1A6680',
            '#B3CC4D', '#994D00', '#FFB34D', '#B3B3FF', '#1AE6FF', '#66FF33', '#E6FF99', '#FF66FF', '#1AFFE6', '#E68099',
            '#80CCE6', '#B30066', '#FFB31A', '#B36666', '#99CCFF', '#E63366', '#FF66CC', '#FF99CC', '#80CC33', '#B3CC33',
            '#33CC66', '#66E600', '#009999', '#CC99B3', '#99FF00', '#E69900', '#FFFF66', '#00E666', '#4DCCE6', '#808066',
            '#66B333', '#9980E6', '#E6B399', '#994DE6', '#99CC00', '#6666B3', '#4D99CC', '#CCB3B3', '#99CC33', '#804D4D',
            '#B3FF99', '#1A80CC', '#CC8066', '#E6E633', '#B3FF33', '#CCCC99', '#4DE6FF', '#80804D', '#806699', '#4DE666',
            '#1A99CC', '#FF4D00', '#FF80CC', '#CCCC80', '#1AFF99', '#FF9980', '#FFE680', '#FFB300', '#9980B3', '#338000',
            '#FFB380', '#66CCB3', '#FF9966', '#99E61A', '#FFE61A', '#E66699', '#CCCCB3', '#FF4D66', '#80E61A', '#B3CCB3',
            '#FFB3B3', '#E6FFFF', '#808033', '#CCFF33', '#99CC66', '#4D994D', '#66CC99', '#99FFFF', '#80B34D', '#B3994D',
            '#00E6CC', '#FFE6CC', '#FF6699', '#FFCC00', '#80E600', '#8080B3', '#4D991A', '#99E680', '#CCE680', '#4DFFFF',
            '#804D80', '#33B333', '#9966CC', '#33FF80', '#FF9933', '#803300', '#66FF99', '#E699B3', '#CC66CC', '#994D33',
            '#99B333', '#CCFFB3', '#B3CCE6', '#33CC80', '#E6E64D', '#66FFCC', '#E6B366', '#FFE699', '#998033', '#CC80E6',
            '#E6B3FF', '#33B31A', '#996680', '#B3FFE6', '#E6004D', '#CCB3FF', '#CCFF99', '#1A6699', '#80B3FF', '#B3B3B3',
            '#99E633', '#B33380', '#4D80FF', '#FF3399', '#B3E633', '#B34DFF', '#B33333', '#CCE666', '#666680', '#E680E6',
            '#808099', '#8066FF', '#804D1A', '#B399E6', '#668066', '#80CC66', '#99B300', '#339999', '#99331A', '#99B380',
            '#669933', '#8080FF', '#804D66', '#668000', '#80CC00', '#CC8080', '#CCB3E6', '#6699FF', '#66B380', '#4D6633',
            '#00E633', '#009980', '#E6E666', '#99CCCC', '#33E666', '#CCB3CC', '#668080', '#66B366', '#80664D', '#80E699',
            '#E69980', '#B39966', '#CCFFFF', '#4D8080', '#9999E6', '#E69933', '#80CC99', '#0066B3', '#663366', '#B366FF',
            '#FF6680', '#FFCCFF', '#E6E6B3', '#B3B399', '#99B3CC', '#666666', '#FF8099', '#B3B366', '#CCB333', '#B3CCFF',
            '#B3FF80', '#E68066', '#CC4D4D', '#99E6FF', '#B380FF', '#E68033', '#B366B3', '#33664D', '#336666', '#4D66E6',
            '#1AE666', '#E666CC', '#00CCFF', '#FF9999', '#998066', '#99B3E6', '#99991A', '#CCCC66', '#999980', '#E6B31A',
            '#9999FF', '#FFCC66', '#E6B3CC', '#FF80B3', '#FFCCCC', '#3399E6', '#66E6B3', '#CCE64D', '#99E666', '#998080',
            '#80FF99', '#FFCCE6', '#8080E6', '#E64D33', '#339966', '#33B3E6', '#E6804D', '#3399FF', '#CCFF00', '#B31A1A'];
        button.onclick = () => {
            let fn = Math.floor(10 * Math.random())
            card.style.backgroundColor = cn[fn]
        }


    })
}
const but = document.querySelector('.but');
const body = document.querySelector('body');
const text = document.querySelector('.text');
let cnt1 = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
    '#CC0033', '#993366', '#FFFFCC', '#8066E6', '#FFCCB3', '#CC0080', '#4DB300', '#CC3366', '#338033', '#FF80FF',
    '#1AB333', '#804D99', '#80FF4D', '#00FF80', '#803380', '#994D99', '#66CCFF', '#CC6699', '#CCFF80', '#FF1A99',
    '#809999', '#994D66', '#FF801A', '#E6FF66', '#66801A', '#B34D00', '#668099', '#CCB300', '#804DE6', '#33B399',
    '#80FF66', '#1A80FF', '#CC334D', '#FF661A', '#FF4D80', '#66804D', '#3380CC', '#1ACC66', '#80661A', '#1A9966',
    '#E6E6E6', '#33E6B3', '#CCCC4D', '#00991A', '#E6CC33', '#80B3CC', '#1ACC99', '#1A8000', '#CC80FF', '#3380FF',
    '#33CC99', '#3366FF', '#806666', '#FFCC4D', '#669900', '#FF9900', '#CC33FF', '#99FFCC', '#4DB399', '#801A80',
    '#99CCB3', '#00E6E6', '#B3331A', '#99CC1A', '#FF4DCC', '#80CC1A', '#B34D33', '#66B34D', '#804DCC', '#B39900',
    '#B3B380', '#B36600', '#CCE6FF', '#00E6B3', '#FF994D', '#8099CC', '#FF33B3', '#9966B3', '#E6B300', '#CCB399',
    '#3399CC', '#994DB3', '#CCB366', '#1ACCE6', '#66B31A', '#B34D80', '#FF8000', '#80FF33', '#E64D1A', '#B366E6',
    '#E6CC00', '#FF664D', '#E666E6', '#9999B3', '#336699', '#809966', '#801A66', '#33E680', '#99E699', '#E6CCB3',
    '#1A99E6', '#664DB3', '#E6991A', '#B3E6E6', '#4D6680', '#1AB300', '#66E680', '#99664D', '#E6E680', '#E6E6FF',
    '#00B3B3', '#B3CC1A', '#8099B3', '#66CC80', '#E6334D', '#B36680', '#B3FFFF', '#B3B3CC', '#80FFFF', '#4DCC33',
    '#E6FF33', '#668033', '#3399B3', '#336633', '#B3B34D', '#B34DB3', '#4DB31A', '#CC99E6', '#E69966', '#4DE6B3',
    '#FFB3E6', '#CC9980', '#664D00', '#B33366', '#FFB333', '#E699CC', '#FF331A', '#6680FF', '#E6E6CC', '#1AE699',
    '#99B31A', '#4D804D', '#6699E6', '#FF3366', '#E69999', '#E699E6', '#80CCCC', '#CC99FF', '#1AB3E6', '#E64DB3',
    '#CC6666', '#4DB333', '#B3B333', '#B3804D', '#B3FF66', '#B3991A', '#80E666', '#66B3CC', '#CC4D99', '#4D9966',
    '#CC4D66', '#CCCCCC', '#1A9980', '#CC4D33', '#80FFB3', '#804D33', '#E6E61A', '#B3664D', '#CCE633', '#66CC66',
    '#3366B3', '#B31A66', '#999900', '#FF66E6', '#CCE699', '#B36633', '#FF804D', '#80991A', '#B39933', '#FFFFE6',
    '#FFE666', '#99B366', '#CC9966', '#1ACC80', '#B38000', '#00B3FF', '#9966E6', '#4DE680', '#FFFF1A', '#33E64D',
    '#66FF4D', '#E6CC4D', '#B3B3E6', '#E680FF', '#FF4D1A', '#808000', '#E66600', '#80B3B3', '#669966', '#996666',
    '#B38033', '#80FFCC', '#B3CC00', '#CCB31A', '#4D8099', '#FF991A', '#CCE600', '#80E6FF', '#CC66B3', '#998099',
    '#B3FF1A', '#80B399', '#8000FF', '#99E64D', '#66CCCC', '#E66666', '#80CC80', '#B380B3', '#B34D66', '#1A99FF',
    '#80E6E6', '#666699', '#4DE633', '#99FFE6', '#E60080', '#B399FF', '#99801A', '#4D3366', '#66FF00', '#1A6680',
    '#B3CC4D', '#994D00', '#FFB34D', '#B3B3FF', '#1AE6FF', '#66FF33', '#E6FF99', '#FF66FF', '#1AFFE6', '#E68099',
    '#80CCE6', '#B30066', '#FFB31A', '#B36666', '#99CCFF', '#E63366', '#FF66CC', '#FF99CC', '#80CC33', '#B3CC33',
    '#33CC66', '#66E600', '#009999', '#CC99B3', '#99FF00', '#E69900', '#FFFF66', '#00E666', '#4DCCE6', '#808066',
    '#66B333', '#9980E6', '#E6B399', '#994DE6', '#99CC00', '#6666B3', '#4D99CC', '#CCB3B3', '#99CC33', '#804D4D',
    '#B3FF99', '#1A80CC', '#CC8066', '#E6E633', '#B3FF33', '#CCCC99', '#4DE6FF', '#80804D', '#806699', '#4DE666',
    '#1A99CC', '#FF4D00', '#FF80CC', '#CCCC80', '#1AFF99', '#FF9980', '#FFE680', '#FFB300', '#9980B3', '#338000',
    '#FFB380', '#66CCB3', '#FF9966', '#99E61A', '#FFE61A', '#E66699', '#CCCCB3', '#FF4D66', '#80E61A', '#B3CCB3',
    '#FFB3B3', '#E6FFFF', '#808033', '#CCFF33', '#99CC66', '#4D994D', '#66CC99', '#99FFFF', '#80B34D', '#B3994D',
    '#00E6CC', '#FFE6CC', '#FF6699', '#FFCC00', '#80E600', '#8080B3', '#4D991A', '#99E680', '#CCE680', '#4DFFFF',
    '#804D80', '#33B333', '#9966CC', '#33FF80', '#FF9933', '#803300', '#66FF99', '#E699B3', '#CC66CC', '#994D33',
    '#99B333', '#CCFFB3', '#B3CCE6', '#33CC80', '#E6E64D', '#66FFCC', '#E6B366', '#FFE699', '#998033', '#CC80E6',
    '#E6B3FF', '#33B31A', '#996680', '#B3FFE6', '#E6004D', '#CCB3FF', '#CCFF99', '#1A6699', '#80B3FF', '#B3B3B3',
    '#99E633', '#B33380', '#4D80FF', '#FF3399', '#B3E633', '#B34DFF', '#B33333', '#CCE666', '#666680', '#E680E6',
    '#808099', '#8066FF', '#804D1A', '#B399E6', '#668066', '#80CC66', '#99B300', '#339999', '#99331A', '#99B380',
    '#669933', '#8080FF', '#804D66', '#668000', '#80CC00', '#CC8080', '#CCB3E6', '#6699FF', '#66B380', '#4D6633',
    '#00E633', '#009980', '#E6E666', '#99CCCC', '#33E666', '#CCB3CC', '#668080', '#66B366', '#80664D', '#80E699',
    '#E69980', '#B39966', '#CCFFFF', '#4D8080', '#9999E6', '#E69933', '#80CC99', '#0066B3', '#663366', '#B366FF',
    '#FF6680', '#FFCCFF', '#E6E6B3', '#B3B399', '#99B3CC', '#666666', '#FF8099', '#B3B366', '#CCB333', '#B3CCFF',
    '#B3FF80', '#E68066', '#CC4D4D', '#99E6FF', '#B380FF', '#E68033', '#B366B3', '#33664D', '#336666', '#4D66E6',
    '#1AE666', '#E666CC', '#00CCFF', '#FF9999', '#998066', '#99B3E6', '#99991A', '#CCCC66', '#999980', '#E6B31A',
    '#9999FF', '#FFCC66', '#E6B3CC', '#FF80B3', '#FFCCCC', '#3399E6', '#66E6B3', '#CCE64D', '#99E666', '#998080',
    '#80FF99', '#FFCCE6', '#8080E6', '#E64D33', '#339966', '#33B3E6', '#E6804D', '#3399FF', '#CCFF00', '#B31A1A'];but.onclick= () => {
    let random = Math.floor( 10 * Math.random())
    body.style.backgroundColor = cnt1[random]
    but.classList.add("but")
};
// const but1 = document.querySelector('.but1');
// const body1 = document.querySelector('body');
// const text1 = document.querySelector('.text');
// let cnt11 = ["red","green","yellow","blue","black", "aqua", "blue"]
// but.onclick= () => {
//     let r1 = Math.floor( 10 * Math.random())
//     body1.style.backgroundColor = cnt11[r1]
//     but1.classList.add("but")
// };
// const but2 = document.querySelector('.but2');
// const body2 = document.querySelector('body');
// const text3 = document.querySelector('.text');
// let cnt12 = ["red","green","yellow","blue","black", "aqua", "blue"]
// but.onclick= () => {
//     let r2 = Math.floor( 10 * Math.random())
//     body2.style.backgroundColor = cnt12[r2]
//     but2.classList.add("but")
// };
// const but3 = document.querySelector('.but3');
// const body3 = document.querySelector('body');
// const text4 = document.querySelector('.text');
// let cnt13 = ["red","green","yellow","blue","black", "aqua", "blue"]
// but.onclick= () => {
//     let r3 = Math.floor( 10 * Math.random())
//     body3.style.backgroundColor = cnt13[r3]
//     but3.classList.add("but")
// };
get()







// Home task

// const box = document.querySelector('.box');
// let nav = [
//     { number: "#",
//       name: "Name",
//       contact: "contact", 
//       age: "age",
//       country: "country",
//       status: "status",
//       actions: "actions"
//     },
// ];
// let nav1 = [
//     {
//         number1: "24",
//         name1: " shadab <br> <span>ksjdksjd@gmail.com</span>",
//         contact1: "+1 232 243 43", 
//         age1: "17",
//         country1: "America",
//         status1: "",
//         actions1: ""
//       },
//       {
//         number1: "24",
//         name1: " shadab <br> <span>ksjdksjd@gmail.com</span>",
//         contact1: "+1 232 243 43", 
//         age1: "17",
//         country1: "America",
//         status1: "",
//         actions1: ""
//       },
//       {
//         number1: "24",
//         name1: " shadab <br> <span>ksjdksjd@gmail.com</span>",
//         contact1: "+1 232 243 43", 
//         age1: "17",
//         country1: "America",
//         status1: "",
//         actions1: ""
//       },
//       {
//         number1: "24",
//         name1: " shadab <br> <span>ksjdksjd@gmail.com</span>",
//         contact1: "+1 232 243 43", 
//         age1: "17",
//         country1: "America",
//         status1: "",
//         actions1: ""
//       },
// ]

// function test(params) {
//     nav.forEach((e,i) => {
//         let row = document.createElement('tr');
//         row.innerHTML = `
//             <td class="t1">${e.number}</td>
//             <td class="t2"> ${e.name}</td>
//             <td class="t3">${e.contact}</td>
//             <td class="t4">${e.age}</td>
//             <td class="t5">${e.country}</td>
//             <td class="t6">${e.status}</td>
//             <td class="t7">${e.actions}</td>
//         `;
//         box.appendChild(row);
//     })
//     nav1.forEach((e,i) => {
//         let row = document.createElement('tr');
//         row.innerHTML = `
//             <td class="t1">${e.number1}</td>
//             <td class="t2"> <img src="https://cdn.vox-cdn.com/thumbor/6S_BERxoDvfZqF05MW_gEiIpewk=/0x0:1033x689/1400x1400/filters:focal(517x345:518x346)/cdn.vox-cdn.com/uploads/chorus_asset/file/11701871/ive.png" alt="Placeholder Image"> ${e.name1} <br></td>
//             <td class="t3">${e.contact1}</td>
//             <td class="t4">${e.age1}</td>
//             <td class="t5">${e.country1}</td>
//             <td class="t8"> <p>verified</p> ${e.status1}</td>
//             <td class="t9"><img src="https://png.pngtree.com/png-clipart/20191123/original/pngtree-view-icon-png-image_5196447.jpg" alt="Placeholder Image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5cbAwJj5F95w0tH8YEbCVhIn-jN8SC8Hjw&s" alt="Placeholder Image"> <img id="k" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1mtZCRWh6vOvjwovfizM2BvKFMTiCDawFw&s"> ${e.actions1}</td>
//         `;
//         box.appendChild(row);
//     })
// }   
// test();