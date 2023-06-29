import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/index2.js";
const image = "/_app/immutable/assets/mahanfr.80261891.jpg";
const books = [
  {
    name: "Enogh Rope To Shoot Yourself In The Foot",
    author: "Allen I. Holub",
    description: "Rules for C and C++ Programming",
    text: [
      "In Terms of Books for C and Lower level languages in general there is only",
      "two kind: It's either text book of every feature of C or C++ which can be a bit",
      "overwhelming or has no useful inforamtion.",
      "I think this book is a balance between useful information about the language and",
      "good programming idologies. In addition to that the author has a good",
      "and easy way of explaining all the mentioned inforamtion,",
      "So i really recommend this book."
    ],
    text_fa: []
  },
  {
    name: "Rust For Rustaceans",
    author: "Jon Gjengset",
    description: "Idiomatic Programming For Experienced Developers",
    text: [
      "One of the best books for learning insides of rust languages.",
      "Although this book might be a little to advanced if you just started learning rust",
      "i do think it can be a really good addition to the official Rust Book."
    ],
    text_fa: []
  },
  {
    name: "Advanced Programming in the UNIX Enviroment",
    author: "W. Richard Stevens, Stephen A. Rago",
    description: "",
    text: [
      "This Book is one of the must-haves if you wanna do any low level programming.",
      "Explanations are straight-forward but the information is a little bit too ditaled",
      "which if you already have even a small knowledge of unix systems can make it",
      "reading experience extremely boaring."
    ],
    text_fa: []
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-qlnvzq_START -->${$$result.title = `<title>Mahan Farzaneh</title>`, ""}<meta name="description" content="Computer Engineer on Paper, Software Developer and Writer(not really) on the Internet. Love to work on low level stuff and learn every thing about day to day technologies that we use without thinking about it."><!-- HEAD_svelte-qlnvzq_END -->`, ""}

<section class="flex flex-row items-center justify-between mx-4 lg:mx-10 py-3"><div class="flex flex-row items-center"><img class="rounded-full"${add_attribute("src", image, 0)} alt="Mahan Farzaneh - ماهان فرزانه"${add_attribute("width", "60px", 0)}${add_attribute("height", "60px", 0)}>
        <div class="mx-4"><h3 class="text-gray-200 text-md">Mahan Farzaneh</h3>
            <h4 class="text-gray-400 text-sm">Computer Engineere</h4></div></div>
    <div class="flex flex-row space-x-2"><a href="https://twitter.com/mahan.farzaneh"><svg class="bg-gray-300 h-8 w-8 p-1 rounded-full hover:bg-primary" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"></path></svg></a>
    <a href="https://linkedin.com/in/mahan-farzaneh"><svg class="bg-gray-300 h-8 w-8 p-1 rounded-full hover:bg-primary" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"></path><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"></path></g></svg></a>
    <a href="https://github.com/mahanfarzaneh2000"><svg class="bg-gray-300 h-8 w-8 p-1 rounded-full hover:bg-primary" height="56.693px" id="Layer_1" version="1.1" viewBox="-1163 1657.697 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M-1110.2747,1686.8912c0.0101,0.0011,0.0215,0.0022,0.0316,0.0022c0.079,0,0.1512-0.0575,0.166-0.1388   c0.0168-0.0916-0.0441-0.1796-0.1355-0.1976c-2.3115-0.4258-4.0026-0.8966-9.7083-0.8491   c0.3556-1.3156,0.5476-2.8716,0.5859-4.7144c-0.009-4.9966-2.4006-6.7638-2.8601-7.5936c0.6775-3.7828-0.113-5.5048-0.48-6.0953   c-1.355-0.4822-4.7142,1.2399-6.5492,2.4537c-2.9923-0.8751-9.3157-0.7905-11.6869,0.2258   c-4.3756-3.1335-6.6904-2.6536-6.6904-2.6536s-1.4961,2.6818-0.3951,6.6056c-1.4397,1.835-2.5125,3.1335-2.5125,6.5752   c0,1.9388,0.2281,3.6743,0.743,5.1897c-2.29-0.0056-7.0897,0.3026-9.3379,0.8582c-0.0903,0.0226-0.1458,0.1152-0.1243,0.2056   c0.0193,0.0768,0.0892,0.1287,0.1649,0.1287c0.0135,0,0.0271-0.0011,0.0406-0.0045c2.2684-0.5612,7.2285-0.8661,9.3785-0.848   c0.123,0.3264,0.2609,0.6426,0.4132,0.9486c-5.5272,0.1467-7.0175,0.936-9.3379,1.5153c-0.1682,0.043-0.3331,0.0836-0.4934,0.1232   c-0.0903,0.0226-0.1467,0.1151-0.1243,0.2054c0.0193,0.0768,0.0881,0.1288,0.1649,0.1287c0.0135,0,0.0271-0.0011,0.0406-0.0045   c0.1604-0.0406,0.3252-0.0813,0.4946-0.1241c2.3273-0.5815,3.8376-1.3754,9.4315-1.5098c1.6442,2.9856,4.8148,4.843,10.1626,5.3568   c-0.7633,0.5793-1.6802,1.6791-1.8066,2.9506c-0.9597,0.6211-2.8895,0.8254-4.3903,0.3523   c-2.1025-0.6639-2.9076-4.8271-6.0558-4.2344c-0.682,0.1288-0.5465,0.5781,0.043,0.9598c0.9598,0.621,1.8632,1.3978,2.5598,3.0521   c0.5353,1.2704,1.6599,3.5399,5.2168,3.5399c1.4115,0,2.4006-0.1693,2.4006-0.1693s0.0271,3.2418,0.0271,4.502   c0,1.4532-1.9614,1.8632-1.9614,2.5621c0,0.2766,0.6493,0.3026,1.171,0.3026c1.0309,0,3.1764-0.8605,3.1764-2.3712   c0-1.2003,0.0192-5.2361,0.0192-5.9418c0-1.5436,0.8276-2.0325,0.8276-2.0325s0.1028,8.2395-0.1976,9.3439   c-0.3523,1.2986-0.988,1.1145-0.988,1.6938c0,0.8615,2.5825,0.2111,3.4384-1.6803c0.6617-1.4724,0.3727-9.5551,0.3727-9.5551   l0.7057-0.0146c0,0,0.0396,3.7003,0.0159,5.3917c-0.0249,1.7513-0.1434,3.9668,0.8965,5.0114   c0.6832,0.6865,2.8987,1.8914,2.8987,0.7904c0-0.6403-1.2139-1.1665-1.2139-2.8986c0-1.8846,0-7.4425,0-7.9697   c0.9688,0,0.8231,2.6207,0.8231,2.6207l0.0712,4.869c0,0-0.2134,1.774,1.9185,2.517c0.7521,0.2631,2.3622,0.3342,2.4379-0.1073   c0.0757-0.4426-1.9388-1.101-1.9569-2.4751c-0.0112-0.8379,0.0374-1.3268,0.0374-4.9684s-0.489-4.9875-2.1929-6.0603   c5.2585-0.5409,8.5128-1.8417,10.0994-5.3263c1.8225,0.0598,5.6387,0.2462,10.0741,1.6023   c0.0157,0.0056,0.0327,0.0079,0.0497,0.0079c0.0723,0,0.1389-0.0475,0.1615-0.1198c0.027-0.0903-0.0226-0.1852-0.113-0.2123   c-4.3744-1.338-8.0743-1.547-10.0277-1.6124c0.123-0.3026,0.236-0.6199,0.3364-0.953   C-1114.2794,1685.9946-1112.5839,1686.4644-1110.2747,1686.8912z M-1150.1143,1692.4308c-0.2104,0-0.3811-0.1136-0.3811-0.254   c0-0.1403,0.1707-0.254,0.3811-0.254s0.3811,0.1138,0.3811,0.254C-1149.7332,1692.3171-1149.9038,1692.4308-1150.1143,1692.4308z    M-1148.9286,1693.0754c-0.2104,0-0.3811-0.1138-0.3811-0.254c0-0.1404,0.1707-0.254,0.3811-0.254s0.3811,0.1136,0.3811,0.254   C-1148.5475,1692.9617-1148.7181,1693.0754-1148.9286,1693.0754z M-1148.5852,1693.6824c0-0.1403,0.1707-0.254,0.3811-0.254   s0.3811,0.1138,0.3811,0.254c0,0.1404-0.1707,0.254-0.3811,0.254S-1148.5852,1693.8228-1148.5852,1693.6824z M-1147.5688,1694.9104   c-0.2106,0-0.3812-0.1138-0.3812-0.2542c0-0.1403,0.1707-0.254,0.3812-0.254c0.2104,0,0.3811,0.1138,0.3811,0.254   C-1147.1877,1694.7966-1147.3584,1694.9104-1147.5688,1694.9104z M-1146.8444,1695.8278c-0.2104,0-0.3811-0.1136-0.3811-0.254   c0-0.1403,0.1707-0.254,0.3811-0.254s0.3811,0.1138,0.3811,0.254C-1146.4633,1695.7141-1146.6339,1695.8278-1146.8444,1695.8278z    M-1145.8657,1696.6089c-0.2104,0-0.3811-0.1138-0.3811-0.254c0-0.1404,0.1707-0.2542,0.3811-0.2542s0.3811,0.1138,0.3811,0.2542   C-1145.4846,1696.4951-1145.6553,1696.6089-1145.8657,1696.6089z M-1144.4966,1697.1169c-0.2104,0-0.3811-0.1136-0.3811-0.254   c0-0.1403,0.1707-0.254,0.3811-0.254s0.3811,0.1138,0.3811,0.254C-1144.1155,1697.0033-1144.2861,1697.1169-1144.4966,1697.1169z    M-1143.1228,1697.1169c-0.2104,0-0.3811-0.1136-0.3811-0.254c0-0.1403,0.1707-0.254,0.3811-0.254s0.3811,0.1138,0.3811,0.254   C-1142.7417,1697.0033-1142.9124,1697.1169-1143.1228,1697.1169z M-1141.7443,1696.9005c-0.2104,0-0.3811-0.1138-0.3811-0.254   s0.1707-0.254,0.3811-0.254c0.2106,0,0.3811,0.1138,0.3811,0.254S-1141.5337,1696.9005-1141.7443,1696.9005z M-1130.9503,1691.4921   c-1.1366,0.0377-2.3154,0.0569-3.5028,0.0569c-1.199,0-2.3564-0.0195-3.4398-0.0582c-5.7773-0.2025-8.9592-2.6409-8.9592-6.8652   c0-0.4387,0.0928-1.9808,1.2881-3.4138c1.1617-1.3927,2.9418-2.1292,5.1478-2.1292c0.1503,0,0.4192,0.0165,0.9651,0.0503   c1.1697,0.0728,3.1277,0.1945,5.0663,0.1945c1.7555,0,3.531-0.1295,4.485-0.1993c0.4465-0.0328,0.6257-0.0454,0.7411-0.0454   c4.693,0,6.3649,2.9984,6.3649,5.8043C-1122.7939,1687.7782-1124.209,1691.2712-1130.9503,1691.4921z"></path><path d="M-1151.2622,1695.1456c0.9093,0,0.0155-1.4104,0-2.0702C-1151.2664,1693.7175-1152.1715,1695.1456-1151.2622,1695.1456z"></path><path d="M-1133.5531,1689.0763c-0.0935,0-0.1693,0.0758-0.1693,0.1693c0,0.3732-0.4386,0.7905-1.0256,0.7905   c-0.0846,0-0.1661-0.0094-0.2441-0.0262c-0.1948-0.0419-0.3669-0.13-0.5078-0.2336c-0.0282-0.0206-0.0551-0.042-0.0807-0.0637   c-0.0768-0.0652-0.1416-0.1337-0.1926-0.1989c-0.0852-0.1088-0.1321-0.2083-0.1321-0.2681c0-0.0935-0.0758-0.1693-0.1694-0.1693   c-0.0935,0-0.1693,0.0758-0.1693,0.1693c0,0.0483,0.0099,0.1022,0.0288,0.1595c0.0284,0.0859,0.0774,0.1796,0.144,0.2737   c0.0668,0.094,0.1514,0.1886,0.2511,0.2764c0.0997,0.0876,0.2146,0.1686,0.3422,0.2356c0.1594,0.0836,0.3384,0.1453,0.5319,0.1709   c0.0645,0.0085,0.1306,0.0131,0.1981,0.0131c0.3518,0,0.6569-0.1139,0.8889-0.2867c0.0331-0.0247,0.0647-0.0505,0.0948-0.0775   c0.0601-0.0538,0.114-0.1119,0.161-0.1729c0.1173-0.1523,0.1917-0.3229,0.2131-0.4913c0.0043-0.0337,0.0065-0.0673,0.0065-0.1007   C-1133.3837,1689.1521-1133.4595,1689.0763-1133.5531,1689.0763z"></path><path d="M-1135.2507,1688.1698c0.042,0.062,0.0956,0.1156,0.1576,0.1576c0.0233,0.0156,0.0477,0.0298,0.0732,0.0421   c0.051,0.0245,0.1062,0.0419,0.1642,0.0508c0.0289,0.0044,0.0586,0.0067,0.0889,0.0067c0.1207,0,0.233-0.0367,0.3262-0.0996   c0.0388-0.0262,0.0742-0.057,0.1056-0.0916c0.0438-0.0481,0.0759-0.1055,0.1017-0.1663c0.0298-0.0701,0.0499-0.1451,0.0499-0.2261   c0-0.3221-0.2612-0.5834-0.5834-0.5834c-0.1611,0-0.307,0.0653-0.4126,0.1709c-0.0046,0.0046-0.0081,0.0103-0.0125,0.015   c-0.03,0.0321-0.0555,0.0679-0.0778,0.1062c-0.031,0.0535-0.056,0.1111-0.0688,0.1737c-0.0077,0.038-0.0118,0.0773-0.0118,0.1176   s0.0042,0.0796,0.0118,0.1177C-1135.3229,1688.0371-1135.2926,1688.1077-1135.2507,1688.1698z"></path><path d="M-1139.5708,1682.0514c-0.1194-0.1469-0.2485-0.277-0.3855-0.3879c-0.1371-0.111-0.2822-0.2028-0.4336-0.2729   c-0.1515-0.0702-0.3093-0.1189-0.4719-0.1434c-0.0813-0.0123-0.1638-0.0187-0.2472-0.0187c-1.3357,0-2.4183,1.6135-2.4183,3.604   c0,1.9904,1.0826,3.3781,2.4183,3.3781c0.0834,0,0.1659-0.0054,0.2472-0.016c0.1626-0.0214,0.3204-0.0636,0.4719-0.1251   c0.1514-0.0616,0.2965-0.1426,0.4336-0.2415c0.137-0.0989,0.2661-0.2155,0.3855-0.3485s0.2292-0.2823,0.3278-0.4464   c0.3451-0.5743,0.5522-1.3298,0.5522-2.2006c0-0.8708-0.2072-1.6694-0.5522-2.2925   C-1139.3416,1682.3619-1139.4514,1682.1984-1139.5708,1682.0514z"></path><path d="M-1128.0388,1681.2284c-1.3357,0-2.4183,1.6135-2.4183,3.604c0,1.9904,1.0826,3.3781,2.4183,3.3781   c1.3356,0,2.4182-1.3877,2.4182-3.3781C-1125.6206,1682.8419-1126.7032,1681.2284-1128.0388,1681.2284z"></path></g></svg></a>
    <a href="mailto:mahan.farzaneh2@gmail.com"><svg class="bg-gray-300 h-8 w-8 p-1 rounded-full hover:bg-primary" height="56.7px" id="Layer_1" version="1.1" viewBox="0 0 56.7 56.7" width="56.7px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M53.1719,14.5953l0.0011-0.0011l-0.0011,0.0008v-1.184c0-2.2468-1.8384-4.0852-4.0853-4.0852l-0.0012,0.0011l-0.0024,0.0018  l0.0036-0.0029H7.3962l0.0161,0.0131l-0.0161-0.012c-2.2468,0-4.0853,1.8384-4.0853,4.0853v27.9073  c0,2.2468,1.8384,4.0851,4.0853,4.0851h1.4543h38.6578v-0.001c4.2856-0.0498,5.5728-1.1102,5.6702-4.0809L53.1719,14.5953z   M46.0429,10.3258L28.1753,23.487L10.4239,10.3258H46.0429z M9.8608,20.5521l16.5508,11.4004l0.0166,0.0115L9.8513,43.4907  L9.8608,20.5521z M10.2886,44.4046l17.0151-11.8314l0.2985,0.2077c0.1716,0.1194,0.3714,0.1792,0.5712,0.1792  c0.1982,0,0.8773-0.39,0.8773-0.39l17.0197,11.8345H10.2886z M46.4973,43.4836L29.9305,31.9641l9.2394-6.3642l7.3274-5.0472V43.4836  z"></path></svg></a></div></section>
<hr class="h-1 border-none bg-primary mx-4 lg:mx-10">
<section class="mt-2 mx-4 lg:mx-10 py-3"><div class="grid grid-cols-1 md:grid-cols-2 w-full gap-2"><div class="border-2 border-secondary p-2 flex flex-row items-center"><div class="text-gray-300 mx-2"><h1 class="font-semibold">Nemet</h1>
                <p class="text-gray-400 text-sm">An Interpeted Language specificly made for creating visual Media</p>
                <div class="flex flex-row mt-2"><a href="https://github.com/mahanfarzaneh2000/Nemet" class="hover:bg-secondary text-sm border border-primary rounded-sm px-2">Gitub</a></div></div></div>
        <div class="border-2 border-secondary p-2 flex flex-row items-center"><div class="text-gray-300 mx-2"><h1 class="font-semibold">SubLearn</h1>
                <p class="text-gray-400 text-sm">An Educational Apllication for Analysing English Subtitles for Challenging Words Based on the user Vocabulary</p>
                <div class="flex flex-col md:flex-row mt-2 space-y-2 md:space-y-0 text-center md:space-x-2"><a href="https://github.com/mahanfarzaneh2000/SubLearn" class="hover:bg-secondary text-sm border border-primary rounded-sm px-2">Gitub</a>
                    <a href="https://github.com/mahanfarzaneh2000/SubLearn/releases/download/v1.0.0/sublearn_1.0.0_amd64.deb" class="hover:bg-secondary text-sm border border-primary rounded-sm px-2">Download for Windows</a>
                    <a href="https://github.com/mahanfarzaneh2000/SubLearn/releases/download/v1.0.0/sublearn_1.0.0_x64_en-US.msi" class="hover:bg-secondary text-sm border border-primary rounded-sm px-2">Download for Deb</a></div></div></div>
        <div class="border-2 border-secondary p-2 flex flex-row items-center"><div class="text-gray-300 mx-2"><h1 class="font-semibold">Zillojs</h1>
                <p class="text-gray-400 text-sm">Simple Nodejs web farmework with custom Template Engine and Routing</p>
                <div class="flex flex-row mt-2 space-x-2"><a href="https://github.com/mahanfarzaneh2000/ZilloJs" class="hover:bg-secondary text-sm border border-primary rounded-sm px-2">Gitub</a>
                    <a href="https://www.npmjs.com/package/zillojs" class="hover:bg-secondary text-sm border border-primary rounded-sm px-2">npm</a></div></div></div></div></section>

<section class="border-2 border-secondary mt-2 text-gray-300 p-3 mx-4 lg:mx-10 py-3"><h3 class="font-semibold">Book Recommendations</h3>
        ${each(books, (book) => {
    return `<div class="mt-2 p-3 border-2 border-secondary"><h3>${escape(book.name)} - ${escape(book.author)}</h3>
            <p class="font-semibold text-gray-400">${escape(book.description)}</p>
            <p class="text-sm text-gray-400">${each(book.text, (txt) => {
      return `<span>${escape(txt)}</span>
                    <span></span>`;
    })}</p>
            <p dir="rtl" class="text-sm text-gray-400">${each(book.text_fa, (txt) => {
      return `<span>${escape(txt)}</span>
                    <span></span>`;
    })}</p>
        </div>`;
  })}</section>

<section class="border-2 border-secondary mt-2 min text-gray-300 p-3 mx-4 lg:mx-10 py-3"><h3 class="font-semibold">Articles</h3>
        ${each(data.articles, (article) => {
    return `<div class="mt-2 p-3 border-2 border-secondary"><a class="flex flex-row justify-between"${add_attribute("href", article.path, 0)}><h3 class="font-bold">${escape(article.meta.title)}</h3>
                <h3 dir="rtl" class="font-bold">${escape(article.meta.titlefa)}</h3></a>
            <small class="font-semibold text-gray-400">Published at: ${escape(article.meta.date)}</small>
            <p class="text-gray-400 text-sm">${escape(article.meta.description)}</p>
            <p class="text-gray-400 text-md" dir="rtl">${escape(article.meta.descriptionfa)}</p>
        </div>`;
  })}</section>`;
});
export {
  Page as default
};