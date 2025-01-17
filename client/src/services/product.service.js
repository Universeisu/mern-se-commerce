import api from "./api";

const API_URL = "product"; // ใส่ URL ของเซิร์ฟเวอร์ที่ให้บริการ

const getAllProducts = async () => {
  try {
    const response = await api.get(`${API_URL}`);
    return response;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error; // ส่งข้อผิดพลาดกลับไปยังส่วนที่เรียกใช้
  }
};

const ProductService = {
  getAllProducts,
};

export default ProductService;
