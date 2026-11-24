// ===== ASHA'S KITCHEN - CLEAN SCRIPT - NO WHATSAPP REDIRECT =====
let cart = [];
let currentFilter = "all";

// ===== DISHES DATA - YOUR FULL MENU =====
const dishes = [
    { id: 1, name: "Korean Bibimbap", cat: "korean", veg: false, price: 349, old: 449, rating: "4.9 ★", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80&sig=1", desc: "Stone bowl rice, veggies, beef, egg & gochujang." },
    { id: 2, name: "Korean BBQ Bulgogi", cat: "korean", veg: false, price: 499, old: 599, rating: "4.8 ★", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80&sig=2", desc: "Grilled marinated beef, sesame & BBQ sauce." },
    { id: 3, name: "Kimchi Jjigae", cat: "korean", veg: true, price: 299, old: 379, rating: "4.7 ★", img: "https://travel-s-helper.b-cdn.net/south-korea/recipe__010-kimchi-jjigae__dish-4x3.webp", desc: "Spicy kimchi stew with tofu." },
    { id: 4, name: "Korean Fried Chicken", cat: "korean", veg: false, price: 399, old: 499, rating: "5.0 ★", img: "https://dietcrafts.com/wp-content/uploads/2025/12/90756.jpg", desc: "Double-fried chicken, sweet spicy glaze." },
    { id: 5, name: "Tteokbokki - Rice Cake", cat: "korean", veg: true, price: 249, old: 329, rating: "4.8 ★", img: "https://pickledplum.com/wp-content/uploads/2019/01/Tteokbokki-Korean-spicy-rice-cakes-1200.jpg", desc: "Chewy rice cakes in spicy gochujang." },
    { id: 6, name: "Japchae Noodles", cat: "korean", veg: true, price: 299, old: 389, rating: "4.7 ★", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80&sig=6", desc: "Glass noodles, spinach, mushroom." },
    { id: 7, name: "Kimchi Fried Rice", cat: "korean", veg: false, price: 279, old: 359, rating: "4.8 ★", img: "https://tse4.mm.bing.net/th/id/OIP.sMsrAWh7Cs7MSTe2TMXX5AHaJQ?r=0&w=768&h=960&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Fried rice with kimchi, egg & cheese." },
    { id: 8, name: "Samgyeopsal Pork BBQ", cat: "korean", veg: false, price: 549, old: 649, rating: "4.9 ★", img: "https://th.bing.com/th/id/OIP.lcattJ5MtRnoQWlAvoR7KAHaEC?w=308&h=180&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Grilled pork belly with lettuce & ssamjang." },
    { id: 9, name: "Gimbap Rolls", cat: "korean", veg: true, price: 199, old: 269, rating: "4.6 ★", img: "https://delectablerecipe.com/wp-content/uploads/2025/05/mary03145_httpss.mj_.runAZ7Cqe9-nDY_zoomed-in_Amateur_photo_fr_31fb4c14-d289-4b14-8f73-0b969e7742d6_2.png", desc: "Seaweed rice rolls with veggies & egg." },
    { id: 10, name: "Sundubu Jjigae", cat: "korean", veg: true, price: 289, old: 369, rating: "4.7 ★", img: "https://th.bing.com/th/id/OIP.9ZhUwbdi_QmXHYEaSK1X5AHaHa?w=201&h=201&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Soft tofu spicy soup with egg." },
    { id: 11, name: "Bulgogi Burger", cat: "korean", veg: false, price: 329, old: 419, rating: "4.6 ★", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80&sig=11", desc: "Bulgogi patty, kimchi mayo & cheese." },
    { id: 12, name: "Korean Corn Cheese", cat: "korean", veg: true, price: 229, old: 299, rating: "4.7 ★", img: "https://tse2.mm.bing.net/th/id/OIP.DiMbxTycEtmpp3GyZfwA0QHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Sweet corn, mozzarella & mayo." },
    { id: 13, name: "Haemul Pajeon Pancake", cat: "korean", veg: false, price: 349, old: 449, rating: "4.8 ★", img: "https://th.bing.com/th/id/OIP.f7H_dT9l5qIebaFP71T3zgHaE7?w=258&h=180&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Seafood pancake with prawns." },
    { id: 14, name: "Jajangmyeon Noodles", cat: "korean", veg: true, price: 299, old: 389, rating: "4.8 ★", img: "https://th.bing.com/th/id/OIP.xlGyOn-63KZrm0JJukP6EwHaE8?w=288&h=192&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Noodles in black bean paste." },
    { id: 15, name: "Korean Ramyun", cat: "korean", veg: false, price: 219, old: 289, rating: "4.7 ★", img: "https://th.bing.com/th/id/OIP.VnX9dksxWBQkUNFH9Z-2UgHaE8?w=289&h=192&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Spicy Korean noodles with egg." },
    { id: 16, name: "Dim Sum Platter", cat: "chinese", veg: false, price: 399, old: 499, rating: "4.9 ★", img: "https://th.bing.com/th/id/OIP.EZ5L87TLIDxvdw7cbxE-3QHaEK?w=316&h=180&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Steamed dumplings & spring rolls." },
    { id: 17, name: "Hakka Noodles", cat: "chinese", veg: true, price: 249, old: 329, rating: "4.8 ★", img: "https://tse3.mm.bing.net/th/id/OIP.CKvs_ghjCSKd2hyLE1my_gHaLH?r=0&w=896&h=1344&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Wok noodles, veggies, soy & chilli." },
    { id: 18, name: "Veg Manchurian", cat: "chinese", veg: true, price: 279, old: 349, rating: "4.7 ★", img: "https://th.bing.com/th/id/OIP.SUKiHa0MUEPJ-KI4zLcv5QHaFj?w=244&h=183&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Crispy veg balls in Manchurian gravy." },
    { id: 19, name: "Chicken Manchurian", cat: "chinese", veg: false, price: 329, old: 419, rating: "4.8 ★", img: "https://pupswithchopsticks.com/wp-content/uploads/chicken-manchurian-3new.webp", desc: "Chicken in tangy Manchurian sauce." },
    { id: 20, name: "Schezwan Fried Rice", cat: "chinese", veg: true, price: 269, old: 349, rating: "4.7 ★", img: "https://th.bing.com/th/id/OIP.uuPj_s9RwhiN6uHTZsfB2wHaFj?w=234&h=180&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Spicy Schezwan rice." },
    { id: 21, name: "Chicken Fried Rice", cat: "chinese", veg: false, price: 299, old: 389, rating: "4.8 ★", img: "https://tse4.mm.bing.net/th/id/OIP.b9HwvNAvQoZWNfVA7hHYiAHaJQ?r=0&w=960&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Classic fried rice with chicken & egg." },
    { id: 22, name: "Chilli Paneer", cat: "chinese", veg: true, price: 299, old: 379, rating: "4.8 ★", img: "https://img.freepik.com/premium-photo/chilli-paneer-dry-is-made-using-cottage-cheese-indo-chinese-food_466689-76889.jpg", desc: "Paneer in chilli garlic sauce." },
    { id: 23, name: "Chilli Chicken Dry", cat: "chinese", veg: false, price: 349, old: 449, rating: "4.9 ★", img: "https://cdn.grofers.com/assets/search/usecase/banner/chilli_chicken_dry_01.png", desc: "Spicy Indo-Chinese chilli chicken." },
    { id: 24, name: "Veg Spring Rolls", cat: "chinese", veg: true, price: 219, old: 289, rating: "4.6 ★", img: "https://th.bing.com/th/id/OIP.WshYEQJ4WNcGIYO8fIpfRQHaHa?w=180&h=183&c=7&r=0&o=7&pid=1.7&rm=3", desc: "Crispy rolls with sweet chilli dip." },
    { id: 25, name: "Chicken Dumplings", cat: "chinese", veg: false, price: 259, old: 329, rating: "4.9 ★", img: "https://gelarecipes.com/wp-content/uploads/2026/03/Chicken-And-Fluffy-Dumplings-Recipe1.jpg", desc: "Steamed chicken momos, red chutney." },
    { id: 26, name: "Veg Dumplings", cat: "chinese", veg: true, price: 229, old: 299, rating: "4.7 ★", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80&sig=26", desc: "Steamed veg momos with mayo." },
    { id: 27, name: "Hot & Sour Soup", cat: "chinese", veg: true, price: 199, old: 259, rating: "4.6 ★", img: "https://i.pinimg.com/736x/eb/a8/13/eba8137edc7e94d240b634e5af00e099.jpg", desc: "Tangy soup with mushroom & tofu." },
    { id: 28, name: "Manchow Soup", cat: "chinese", veg: true, price: 209, old: 279, rating: "4.7 ★", img: "https://foodefy.infotechgravity.com/storage/app/public/admin-assets/images/item/item-66bb12c767238.jpg", desc: "Spicy soup with crispy noodles." },
    { id: 29, name: "Kung Pao Chicken", cat: "chinese", veg: false, price: 379, old: 479, rating: "4.8 ★", img: "https://www.recipesbynatalia.com/wp-content/uploads/2026/04/qjggjjqnulcynugxbbau.webp", desc: "Chicken, peanuts, chilli & Sichuan pepper." },
    { id: 30, name: "Honey Chilli Potato", cat: "chinese", veg: true, price: 249, old: 319, rating: "4.7 ★", img: "https://www.cookinwithmima.com/wp-content/uploads/2023/04/honey-chilli-fries.jpg", desc: "Crispy potato in honey chilli glaze." },
    { id: 31, name: "Butter Chicken", cat: "indian", veg: false, price: 399, old: 499, rating: "5.0 ★", img: "https://feelgoodfoodie.net/wp-content/uploads/2023/04/Easy-Butter-Chicken-08-709x1065.jpg", desc: "Creamy tomato curry & butter naan." },
    { id: 32, name: "Hyderabadi Chicken Biryani", cat: "indian", veg: false, price: 349, old: 449, rating: "4.9 ★", img: "https://img.freepik.com/premium-photo/plate-chicken-biryani-image_1197144-881.jpg", desc: "Basmati, chicken, saffron & raita." },
    { id: 33, name: "Paneer Tikka Masala", cat: "indian", veg: true, price: 299, old: 379, rating: "4.8 ★", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80&sig=33", desc: "Smoky paneer in rich masala gravy." },
    { id: 34, name: "Veg Biryani", cat: "indian", veg: true, price: 279, old: 359, rating: "4.7 ★", img: "https://chefamina.com/wp-content/uploads/2025/07/Restaurant_Style_Vegetable_Biryani_2.webp", desc: "Spiced veg biryani with raita." },
    { id: 35, name: "Chicken Tikka Tandoori", cat: "indian", veg: false, price: 379, old: 479, rating: "4.9 ★", img: "https://gamegallereblog.com/wp-content/uploads/2026/04/easy-tandoori-chicken-tikka-recipe-2026-04-04-215735-2.webp", desc: "Charcoal chicken tikka, mint chutney." },
    { id: 36, name: "Palak Paneer", cat: "indian", veg: true, price: 269, old: 349, rating: "4.7 ★", img: "https://latashaskitchen.com/wp-content/uploads/2019/06/SS_533073802_Palak-Paneer_500k.jpg", desc: "Paneer in creamy spinach gravy." },
    { id: 37, name: "Masala Dosa", cat: "indian", veg: true, price: 149, old: 199, rating: "4.8 ★", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80&sig=37", desc: "Crispy dosa, potato masala, sambar." },
    { id: 38, name: "Idli Sambar - 4 Pc", cat: "indian", veg: true, price: 99, old: 149, rating: "4.7 ★", img: "https://img.freepik.com/premium-photo/idly-sambar-idli-with-sambhar-green-red-chutney-popular-south-indian-breakfast_1184104-1319.jpg", desc: "Soft idli, hot sambar & chutney." },
    { id: 39, name: "Chole Bhature", cat: "indian", veg: true, price: 199, old: 269, rating: "4.8 ★", img: "https://thefoodtravellers.com/wp-content/uploads/2025/01/chole-bhature-classic-punjabi-street-food.jpg", desc: "Spicy chickpea curry & bhature." },
    { id: 40, name: "Rogan Josh Mutton", cat: "indian", veg: false, price: 449, old: 549, rating: "4.9 ★", img: "https://static.vecteezy.com/system/resources/previews/025/269/914/large_2x/rogan-josh-with-ai-generated-free-png.png", desc: "Kashmiri mutton curry, slow cooked." },
    { id: 41, name: "Dal Makhani", cat: "indian", veg: true, price: 249, old: 319, rating: "4.8 ★", img: "https://healthyindianrecipes.com/wp-content/uploads/2025/04/dal-tadka-dish-080925.jpg", desc: "Black dal, butter & cream." },
    { id: 42, name: "Butter Naan + Garlic Naan", cat: "indian", veg: true, price: 119, old: 159, rating: "4.7 ★", img: "https://www.asparkleofgenius.com/wp-content/uploads/2023/08/authentic-naan-scaled.jpg", desc: "Tandoor naan with butter & garlic." },
    { id: 43, name: "Chicken 65 Starter", cat: "indian", veg: false, price: 299, old: 379, rating: "4.8 ★", img: "https://media.istockphoto.com/id/1265210223/photo/fried-chicken-kebab-or-kabab.jpg?s=612x612&w=0&k=20&c=eE-Y8lm6xSrFpmOLM-lXwZq7XFSmFJpRk19H4qM2RQE=", desc: "Fiery Chicken 65, curry leaves." },
    { id: 44, name: "Veg Fried Rice - Indian Style", cat: "indian", veg: true, price: 229, old: 299, rating: "4.6 ★", img: "https://tastyrecipeideas.org/wp-content/uploads/2025/09/Vegetable-Fried-Rice-Recipe1.webp", desc: "Indian style veg fried rice." },
    { id: 45, name: "Mango Lassi", cat: "indian", veg: true, price: 149, old: 199, rating: "4.8 ★", img: "https://i0.wp.com/beextravegant.com/wp-content/uploads/2023/06/DSC03864.jpg?fit=1365%2C2048&ssl=1", desc: "Thick mango, curd & cardamom." },
    { id: 55, name: "Pav Bhaji - Mumbai Special", cat: "indian", veg: true, price: 179, old: 249, rating: "4.9 ★", img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://allrecipesss.com/wp-content/uploads/2025/07/pav-bhaji.webp", desc: "🇮🇳 Mumbai Famous! Spicy mashed veggies, butter pav & lemon." },
    { id: 56, name: "Pav Bhaji - Cheese Special", cat: "indian", veg: true, price: 229, old: 299, rating: "4.8 ★", img: "https://img.freepik.com/premium-photo/cheese-pav-bhaji-recipe-is-street-food-bhajipav-recipe-with-addition-cheese_466689-86331.jpg", desc: "🇮🇳 Extra cheese, butter pav, spicy bhaji." },
    { id: 66, name: "Samosa - Special Snacks", cat: "indian", veg: true, price: 100, old: 297, rating: "4.8 ★", img: "https://img.freepik.com/premium-photo/vegetarian-samosas-indian-special-traditional-food-samosa-fried-snacks-white-background-ai_1038983-11687.jpg", desc: "🇮🇳 Extra Crispy, spicy Masala with Potato." },
    { id: 46, name: "Bingsu - Korean Shaved Ice", cat: "dessert", veg: true, price: 249, old: 319, rating: "4.9 ★", img: "https://tse3.mm.bing.net/th/id/OIP.enntc0Ac7HZdnVsdEcONwAHaLH?r=0&w=896&h=1344&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "🇰🇷 Korea Famous! Milk shaved ice, red bean & fruits." },
    { id: 47, name: "Hotteok - Korean Sweet Pancake", cat: "dessert", veg: true, price: 179, old: 249, rating: "4.8 ★", img: "https://eggcellent.recipes/wp-content/uploads/2025/05/Sweet-Korean-Pancake-Hotteok-Recipe-1024x1024.png", desc: "🇰🇷 Korea Famous! Crispy pancake, brown sugar, nuts & cinnamon." },
    { id: 48, name: "Yakgwa - Korean Honey Cookie", cat: "dessert", veg: true, price: 159, old: 219, rating: "4.7 ★", img: "https://thesoulofseoul.net/wp-content/uploads/2023/10/5.png", desc: "🇰🇷 Korea Traditional! Honey cookie, ginger & sesame." },
    { id: 49, name: "Egg Tart - Dan Tat", cat: "dessert", veg: true, price: 149, old: 199, rating: "4.9 ★", img: "https://www.melinarecipes.com/wp-content/uploads/2026/02/t3ibkailb5iczube6xed.webp", desc: "🇨🇳 China Famous! Crispy tart, creamy egg custard." },
    { id: 50, name: "Mango Pudding", cat: "dessert", veg: true, price: 199, old: 269, rating: "4.8 ★", img: "https://tse1.mm.bing.net/th/id/OIP.GFJNx63pqc1VISuNe4C7pAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "🇨🇳 China Famous! Soft mango pudding with mango cubes." },
    { id: 51, name: "Tangyuan - Rice Balls", cat: "dessert", veg: true, price: 179, old: 239, rating: "4.7 ★", img: "https://thumbs.dreamstime.com/b/four-white-tangyuan-glutinous-rice-balls-topped-sesame-seeds-served-bowl-traditional-chinese-dessert-symbolizes-336067686.jpg", desc: "🇨🇳 China Famous! Sweet rice balls in ginger soup." },
    { id: 52, name: "Gulab Jamun - 4 Pc", cat: "dessert", veg: true, price: 129, old: 179, rating: "4.9 ★", img: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?auto=format&fit=crop&w=800&q=80&sig=52", desc: "🇮🇳 India Famous! Hot jamun in rose sugar syrup." },
    { id: 53, name: "Rasmalai - 4 Pc", cat: "dessert", veg: true, price: 159, old: 219, rating: "4.9 ★", img: "https://titli.ae/wp-content/uploads/2025/04/Rabdi-Rasmalai-Mockup-for-listing.jpg", desc: "🇮🇳 India Famous! Soft paneer discs in saffron milk." },
    { id: 54, name: "Jalebi - Crispy Sweet", cat: "dessert", veg: true, price: 119, old: 169, rating: "4.8 ★", img: "https://healthyindianrecipes.com/wp-content/uploads/2025/08/jalebi-recipe.jpg", desc: "🇮🇳 India Famous! Crispy orange jalebi with rabri." },
    { id: 57, name: "Vanilla Ice Cream - 2 Scoops", cat: "dessert", veg: true, price: 99, old: 149, rating: "4.8 ★", img: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80&sig=64", desc: "🍦 Classic vanilla, creamy & smooth." },
    { id: 58, name: "Chocolate Ice Cream", cat: "dessert", veg: true, price: 119, old: 169, rating: "4.9 ★", img: "https://skyfoody.com/wp-content/uploads/2025/07/Homemade_Chocolate_Ice_Cream_Recipe_3.webp", desc: "🍦 Rich dark chocolate, choco chips." },
    { id: 59, name: "Butterscotch Ice Cream", cat: "dessert", veg: true, price: 129, old: 179, rating: "4.8 ★", img: "https://icecreamin.com/wp-content/uploads/2024/11/butterscotch-ice-cream.jpg", desc: "🍦 Butterscotch crunch, caramel sauce." },
    { id: 60, name: "Mango Ice Cream", cat: "dessert", veg: true, price: 129, old: 179, rating: "4.9 ★", img: "https://tse1.mm.bing.net/th/id/OIP.yG4IK25Dk3SK6uTHLTVYjQHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "🍦 Fresh Alphonso mango, summer special." },
    { id: 61, name: "Strawberry Ice Cream", cat: "dessert", veg: true, price: 119, old: 169, rating: "4.7 ★", img: "https://tse4.mm.bing.net/th/id/OIP.n_v1uCofVmZ8oAwlUQnriAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", desc: "🍦 Real strawberry, pink & fruity." },
    { id: 62, name: "Kulfi - Indian Ice Cream", cat: "dessert", veg: true, price: 149, old: 199, rating: "5.0 ★", img: "https://5.imimg.com/data5/HJ/HT/WZ/SELLER-11503736/indian-stick-kulfi-1000x1000.jpg", desc: "🇮🇳 India Famous! Malai kulfi" },
    { id: 65, name: "Falooda - Indian Ice Cream", cat: "dessert", veg: true, price: 159, old: 198, rating: "5.0 ★", img: "https://www.desserthaven.net/wp-content/uploads/2026/03/falooda-ice-cream-recipe-687x1024.webp", desc: "🇮🇳 India Famous! Falooda, basil seeds & rose syrup." },
    { id: 63, name: "Oreo Blast Sundae", cat: "dessert", veg: true, price: 179, old: 249, rating: "4.9 ★", img: "https://cheatdayrecipe.com/wp-content/uploads/2025/08/huot77sva8v7dahfihhr.webp", desc: "🍦 3 Scoops, Oreo, chocolate sauce & nuts." },
    { id: 64, name: "Paan Ice Cream", cat: "dessert", veg: true, price: 139, old: 189, rating: "4.7 ★", img: "https://www.tarladalal.com/media/recipe/mainphoto/2025/02/08/big_paan_ice-cream-9974.webp", desc: "🇮🇳 Special! Betel leaf, gulkand & mint." }
];

// ===== RENDER MENU - SAFE - CHECKS IF GRID EXISTS =====
function renderOne(list, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = "";
    grid.innerHTML = list.map(d => `
    <div class="food-card">
      <span class="card-badge">${d.cat.toUpperCase()} • ${d.rating}</span>
      <img src="${d.img}" alt="${d.name}" loading="lazy">
      <div class="card-info">
        <h3>${d.name} <span class="veg-dot">${d.veg ? "🟢 Veg" : "🔴 Non-Veg"}</span></h3>
        <p>${d.desc}</p>
        <div class="price-row"><span><b>₹${d.price}</b> <small>₹${d.old}</small></span><button class="add-btn" onclick="addToCart(${d.id})">Add +</button></div>
      </div>
    </div>`).join("");
    if (list.length === 0) grid.innerHTML = "<p style='text-align:center;grid-column:1/-1;'>No dish found.</p>";
}

function filterAllMenus() {
    const searchEl = document.getElementById("searchInput");
    const sortEl = document.getElementById("sortSelect");
    if (!searchEl || !sortEl) return;
    let text = searchEl.value.toLowerCase();
    let sort = sortEl.value;
    let filterFn = (cat) => {
        let f = dishes.filter(d => d.cat === cat && (d.name.toLowerCase().includes(text) || d.desc.toLowerCase().includes(text)));
        if (sort === "low") f.sort((a, b) => a.price - b.price);
        if (sort === "high") f.sort((a, b) => b.price - a.price);
        if (sort === "rating") f.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        return f;
    };
    let k = filterFn("korean"), c = filterFn("chinese"), i = filterFn("indian"), d = filterFn("dessert");
    renderOne(k, "koreanGrid"); renderOne(c, "chineseGrid"); renderOne(i, "indianGrid"); renderOne(d, "dessertGrid");
    const setCount = (id, n, label) => { const el = document.getElementById(id); if (el) el.innerText = n + " " + label; };
    setCount("koreanCount", k.length, "Dishes");
    setCount("chineseCount", c.length, "Dishes");
    setCount("indianCount", i.length, "Dishes");
    setCount("dessertCount", d.length, "Desserts");
}

// ===== CART - NO WHATSAPP HERE =====
function addToCart(id) {
    let item = dishes.find(d => d.id === id);
    if (!item) return;
    cart.push(item);
    const cc = document.getElementById("cartCount");
    if (cc) cc.innerText = cart.length;
    // Small popup only, NO redirect
    alert(item.name + " added to cart! 🛒");
}

function openCart() {
    let box = document.getElementById("cartItems");
    if (!box) return;
    if (cart.length === 0) {
        box.innerHTML = "<p>Cart is empty. Add a tasty dish!</p>";
    } else {
        box.innerHTML = cart.map((c, i) => `<div class="cart-item"><span><b>${c.name}</b><br>₹${c.price}</span><button onclick="removeItem(${i})" style="background:#ef4444;color:#fff;border:none;padding:6px 10px;border-radius:8px;cursor:pointer;">Remove</button></div>`).join("");
    }
    const totalEl = document.getElementById("cartTotal");
    if (totalEl) totalEl.innerText = "₹" + cart.reduce((s, c) => s + c.price, 0);
    const msg = document.getElementById("checkoutMsg");
    if (msg) msg.innerText = "";
    const modal = document.getElementById("cartModal");
    if (modal) modal.classList.add("show");
}

function removeItem(i) {
    cart.splice(i, 1);
    const cc = document.getElementById("cartCount");
    if (cc) cc.innerText = cart.length;
    openCart();
}

function closeCart() {
    const modal = document.getElementById("cartModal");
    if (modal) modal.classList.remove("show");
}

// ===== ✅ CHECKOUT - NO WHATSAPP, NO REDIRECT, STAYS ON SAME PAGE =====
function checkout() {
    if (cart.length === 0) {
        alert("Add food first!");
        return;
    }
    let total = cart.reduce((s, c) => s + c.price, 0);
    let names = cart.map(c => c.name).join(", ");

    // 1. Show success message INSIDE cart popup only
    const msg = document.getElementById("checkoutMsg");
    if (msg) msg.innerText = "🎉 Order Placed! Total ₹" + total + " - Arriving in 25 mins! Thank You!";

    // 2. Also show a small alert - NO WhatsApp, NO new tab
    alert("🎉 Order Placed!\n\n" + names + "\n\nTotal: ₹" + total + "\nArriving in 25 mins!");

    // 3. Clear cart
    cart = [];
    const cc = document.getElementById("cartCount");
    if (cc) cc.innerText = "0";
    const totalEl = document.getElementById("cartTotal");
    if (totalEl) totalEl.innerText = "₹0";

    // 4. Close cart after 2 seconds - STAYS ON SAME PAGE
    setTimeout(() => {
        closeCart();
        const box = document.getElementById("cartItems");
        if (box) box.innerHTML = "<p>Cart is empty. Add a tasty dish!</p>";
    }, 2000);
}

// Old WhatsApp function - now disabled, so if any button calls it, it will NOT redirect
function placeOrder() {
    checkout();
}
function clearCart() {
    cart = [];
    const cc = document.getElementById("cartCount");
    if (cc) cc.innerText = "0";
    openCart();
}

// ===== OTHER FUNCTIONS =====
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    if (nav) nav.classList.toggle("show");
}
function showChef() {
    const el = document.getElementById("chefMsg");
    if (el) el.innerText = "👨‍🍳 Chef Kim (Korea) • Chef Lee (China) • Chef Sharma (India) - 20+ Years Experience!";
}
function showService(s) {
    alert(s + " selected! Our team will contact you in 10 minutes.");
}
function scrollToBook() {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "reservation.html";
}
function searchFlavour(flavour) {
    const inp = document.getElementById("searchInput");
    if (inp) inp.value = flavour;
    filterAllMenus();
    const dg = document.getElementById("dessertGrid");
    if (dg) dg.scrollIntoView({ behavior: "smooth" });
}
function showAllDesserts() {
    const inp = document.getElementById("searchInput");
    if (inp) inp.value = "";
    filterAllMenus();
}
function bookTable(e) {
    e.preventDefault();
    let name = document.getElementById("custName").value;
    let date = document.getElementById("bookDate").value;
    let time = document.getElementById("bookTime").value;
    let guests = document.getElementById("guests").value;
    const msg = document.getElementById("bookMsg");
    if (msg) msg.innerText = "✅ Thank You " + name + "! Table booked for " + guests + " on " + date + " at " + time + ". We will call you to confirm.";
}
function sendContact(e) {
    if (e) e.preventDefault();
    let name = document.getElementById("contactName").value;
    const msg = document.getElementById("contactMsg");
    if (msg) msg.innerText = "✅ Thank You " + name + "! Your message is sent. We will call you in 10 minutes.";
    if (e && e.target) e.target.reset();
}
function submitFeedback(e) {
    if (e) e.preventDefault();
    let name = document.getElementById("fbName").value;
    let rating = document.getElementById("fbRating").value;
    const msg = document.getElementById("fbMsg");
    if (msg) msg.innerText = "🎉 Thank You " + name + "! Your " + rating + " star feedback is saved. You got 10% OFF on next order!";
    if (e && e.target) e.target.reset();
}

// ===== START MENU ON PAGE LOAD =====
filterAllMenus();

// ===== NAV ACTIVE + SCROLL =====
document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => {
        document.querySelectorAll(".nav-links a").forEach(x => x.classList.remove("active"));
        a.classList.add("active");
        const nl = document.getElementById("navLinks");
        if (nl) nl.classList.remove("show");
    });
});
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add("visible");
    });
    const nav = document.getElementById("navbar");
    if (nav) nav.style.boxShadow = window.scrollY > 50 ? "0 10px 30px rgba(0,0,0,.4)" : "0 5px 20px rgba(0,0,0,.3)";
});