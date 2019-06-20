function ID_create() {
    let ID_faker;
    let ID_area;
    //亂數生成英文字母，36進制
    ID_area = ((parseInt(Math.random() * 26 + 10)).toString(36)).toUpperCase();
    if (ID_area == 'L' || ID_area == 'R' || ID_area == 'S' || ID_area == 'Y' || ID_area == 'O') {
        //有出現廢棄字母重跑
        ID_create();
        return;
    }

    //取九個亂數數字
    ID_faker = Math.random();
    ID_faker = String(ID_faker).substring(2, 11);
    ID_faker = ID_area + ID_faker;

    checkTWId(ID_faker);
}


function checkTWId(id) {
    id_number = id;
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;
    let result = id.match(regex);
    if (result != null) {
        let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
        let c12 = id.substr(0, 1);
        let n12 = letters.indexOf(c12) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));
        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;
    }

    if (!ret) {
        console.log(id);
        return id_number;
    } else {
        ID_create();
    }
}