const data_1 = 'Test 1';
const data_2 = 'Test 2';
const data_3 = 'Test 3';
const data_4 = 'Test 4';

data_view_1 = function (viewData1) {
    let gtx, serialNo;
    gtx = 'Graphics';
    serialNo = 148;
    console.log(`${data_1} = ${gtx}-${serialNo}`);
}

data_view_2 = function (viewData2) {
    let AI, path;
    AI = 'NPC';
    path = AI + ' route is straight'
    console.log(`${data_2} = ${path}`);
}


data_view_1();
data_view_2();

{
    const data_view_3 = 'Tyrell Gooding';
    const data_view_4 = 1996;

    {
        console.log(`${data_view_3} was born in ${data_view_4}.`);
    }
}
