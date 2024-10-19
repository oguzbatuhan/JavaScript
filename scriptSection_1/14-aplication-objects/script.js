// uygulama nesneler

/*
    1- sipariş bilgilerini object içerisinde saklayınız.
    2- her siparişin ayri ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %20)
    3- tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2025
    ödeme şekli: kredi kartı
    kargo adresi: ahatlı mah. kepez/antalya
    satın alınan ürünler:
        ürün id: 5
        ürün başlığı: iphone 16 pro
        ürün url: http://abc.com/iphone-16-pro
        ürün fiyatı: 75000

        ürün id: 6
        ürün başlığı: iphone 16 pro max
        ürün url: http://abc.com/iphone-16-pro-max
        ürün fiyatı: 85000

    müşteri:
      müşteri id: 12


    sipariş id: 102
    sipariş tarihi: 30.11.2025
    ödeme şekli: kredi kartı
    kargo adresi: kültür mah. kepez/antalya
    satın alınan ürünler:

        ürün id: 6
        ürün başlığı: iphone 16 pro max
        ürün url: http://abc.com/iphone-16-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12
*/

let customer12 = {
    "order101": {
        "order": 101,
        "orderDate": "31.12.2025",
        "paymentMethod": "credit card",
        "address": "ahatlı mah. kepez/antalya",
        "product": {
            "product5": {
                "productİd": 5,
                "productTitle": "iphone 16 pro",
                "productUrl": "http://abc.com/iphone-16-pro",
                "productPrice": 75000
            },
            "product6": {
                "productİd": 6,
                "productTitle": "iphone 16 pro max",
                "productUrl": "http://abc.com/iphone-16-pro-max",
                "productPrice": 85000
            }
        },
        "custemerİd": 12,
    },
    "order102": {
        "order": 102,
        "orderDate": "30.11.2025",
        "paymentMethod": "credit card",
        "address": "kültür mah. kepez/antalya",
        "product": {
            "product6": {
                "productİd": 6,
                "productTitle": "iphone 16 pro max",
                "productUrl": "http://abc.com/iphone-16-pro-max",
                "productPrice": 85000
            }
        }
    },
        "custemerİd": 12,
}

// paid calculator

let paid1 = customer12.order101.product.product5.productPrice + (customer12.order101.product.product5.productPrice * 0.2);
console.log(paid1)

let paid2 = customer12.order101.product.product6.productPrice + (customer12.order101.product.product6.productPrice * 0.2);
console.log(paid2)

let paid3 = customer12.order102.product.product6.productPrice + (customer12.order102.product.product6.productPrice * 0.2);
console.log(paid3)

// total

let result = paid1 + paid2 + paid3;
console.log(result);