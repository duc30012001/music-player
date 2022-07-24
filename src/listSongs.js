import BCCT from "./audio/Bat Coc Con Tim - Lou Hoang.mp3";
import MMBN from "./audio/Mai Mai Ben Nhau - Noo Phuoc Thinh.mp3";
import CATENA from "./audio/Co Ai Thuong Em Nhu Anh Catena_ - Toc Ti.mp3";
import EKLDN from "./audio/Em Khong La Duy Nhat - Toc Tien.mp3";
import BTMMBN from "./audio/Bao Tien Mot Mo Binh Yen_ - 14 Casper_ B.mp3";
import GLAL from "./audio/Gac Lai Au Lo - Da LAB_ Miu Le.mp3";
import TX from "./audio/Thanh Xuan - Da LAB.mp3";
import MN from "./audio/Mot Nha - Da LAB.mp3";
import NCGB from "./audio/Ngay Chua Giong Bao - Bui Lan Huong.mp3";
import CCTVLC from "./audio/Co Chang Trai Viet Len Cay - Phan Manh Q.mp3";
import BQN from "./audio/Buoc Qua Nhau - Vu.mp3";
import ADCGNNE from "./audio/Anh Dech Can Gi Nhieu Ngoai Em - Den_ Vu.mp3";
import LL from "./audio/Buoc Qua Mua Co Don - Vu.mp3";
import BQMCD from "./audio/Buoc Qua Mua Co Don - Vu.mp3";
import TD from "./audio/Thang Dien - JustaTee_ Phuong Ly.mp3";
import MTCE from "./audio/Mat Troi Cua Em - Phuong Ly_ JustaTee.mp3";
import NMDC from "./audio/Noi Minh Dung Chan - My Tam.mp3";
import KSMEDR from "./audio/Khong Sao Ma Em Day Roi - Suni Ha Linh_.mp3";
import TLBT from "./audio/Tim Lai Bau Troi - Tuan Hung.mp3";
import NLTA from "./audio/Nam Lay Tay Anh - Tuan Hung.mp3";

const songs = [
    {
        id: 0,
        name: "Bắt Cóc Con Tim",
        author: "Lou Hoàng",
        url: BCCT,
        thumb: "https://data.chiasenhac.com/data/cover/169/168258.jpg",
    },
    {
        id: 1,
        name: "Mãi Mãi Bên Nhau",
        author: "Noo Phước Thịnh",
        url: MMBN,
        thumb: "https://data.chiasenhac.com/data/cover/52/51381.jpg",
    },
    {
        id: 2,
        name: "Có Ai Thương Em Như Anh (#Catena)",
        author: "Tóc Tiên",
        url: CATENA,
        thumb: "https://data.chiasenhac.com/data/cover/92/91423.jpg",
    },
    {
        id: 3,
        name: "Em Không Là Duy Nhất",
        author: "Tóc Tiên",
        url: EKLDN,
        thumb: "https://data.chiasenhac.com/data/cover/70/69183.jpg",
    },
    {
        id: 4,
        name: "Bao Tiền Một Mớ Bình Yên?",
        author: "14 Casper; Bon",
        url: BTMMBN,
        thumb: "https://data.chiasenhac.com/data/cover/134/133355.jpg",
    },
    {
        id: 5,
        name: "Gác Lại Âu Lo",
        author: "Da LAB; Miu Lê",
        url: GLAL,
        thumb: "https://data.chiasenhac.com/data/cover/125/124649.jpg",
    },
    {
        id: 6,
        name: "Thanh Xuân",
        author: "Da LAB",
        url: TX,
        thumb: "https://data.chiasenhac.com/data/cover/94/93770.jpg",
    },
    {
        id: 7,
        name: "Một Nhà",
        author: "Da LAB",
        url: MN,
        thumb: "https://data.chiasenhac.com/data/cover/35/34197.jpg",
    },
    {
        id: 8,
        name: "Ngày Chưa Giông Bão",
        author: "Bùi Lan Hương",
        url: NCGB,
        thumb: "https://data.chiasenhac.com/data/cover/97/96206.jpg",
    },
    {
        id: 9,
        name: "Có Chàng Trai Viết Lên Cây",
        author: "Phan Mạnh Quỳnh",
        url: CCTVLC,
        thumb: "https://data.chiasenhac.com/data/cover/81/80748.jpg",
    },
    {
        id: 10,
        name: "Bước Qua Nhau",
        author: "Vũ",
        url: BQN,
        thumb: "https://data.chiasenhac.com/data/cover/151/150018.jpg",
    },
    {
        id: 11,
        name: "Anh Đếch Cần Gì Nhiều Ngoài Em",
        author: "Đen; Vũ; Thành Đồng",
        url: ADCGNNE,
        thumb: "https://data.chiasenhac.com/data/cover/98/97369.jpg",
    },
    {
        id: 12,
        name: "Lạ Lùng",
        author: "Vũ",
        url: LL,
        thumb: "https://data.chiasenhac.com/data/cover/76/75885.jpg",
    },
    {
        id: 13,
        name: "Bước Qua Mùa Cô Đơn",
        author: "Vũ",
        url: BQMCD,
        thumb: "https://data.chiasenhac.com/data/cover/133/132452.jpg",
    },
    {
        id: 14,
        name: "Thằng Điên",
        author: "JustaTee; Phương Ly",
        url: TD,
        thumb: "https://data.chiasenhac.com/data/cover/96/95803.jpg",
    },
    {
        id: 15,
        name: "Mặt Trời Của Em",
        author: "Phương Ly; JustaTee",
        url: MTCE,
        thumb: "https://data.chiasenhac.com/data/cover/79/78549.jpg",
    },
    {
        id: 16,
        name: "Nơi Mình Dừng Chân",
        author: "Mỹ Tâm",
        url: NMDC,
        thumb: "https://data.chiasenhac.com/data/cover/100/99800.jpg",
    },
    {
        id: 17,
        name: "Không Sao Mà Em Đây Rồi",
        author: "Suni Hạ Linh; Lou Hoàng",
        url: KSMEDR,
        thumb: "https://data.chiasenhac.com/data/cover/126/125572.jpg",
    },
    {
        id: 18,
        name: "Tìm Lại Bầu Trời",
        author: "Tuấn Hưng",
        url: TLBT,
        thumb: "https://data.chiasenhac.com/data/cover/2/1592.jpg",
    },
    {
        id: 19,
        name: "Nắm Lấy Tay Anh",
        author: "Tuấn Hưng",
        url: NLTA,
        thumb: "https://data.chiasenhac.com/data/cover/21/20074.jpg",
    },
];

export default songs;
