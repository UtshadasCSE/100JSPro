/* ============================================
   MAIN.JS — Product Data, Cart, Rendering
   ============================================ */
(function () {
  'use strict';

  /* ============================================
     PRODUCT DATA
  ============================================ */
  var PRODUCTS = [
    { id:1, name:'Linen Summer Shirt', brand:'Zara', price:49.99, original:89.99, rating:4.8, reviews:312, badge:'sale', tags:['new','sale','all'], img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80', bg:'#f0e8d8' },
    { id:2, name:'Classic White Sneakers', brand:'Nike', price:89.99, original:null, rating:4.9, reviews:854, badge:'new', tags:['new','trending','all'], img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', bg:'#f0f0f0' },
    { id:3, name:'Floral Wrap Dress', brand:'H&M', price:34.99, original:59.99, rating:4.7, reviews:203, badge:'sale', tags:['sale','trending','all'], img:'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80', bg:'#fce4ec' },
    { id:4, name:'Wireless Noise-Cancel Headphones', brand:'Sony', price:149.99, original:229.99, rating:4.9, reviews:1247, badge:'hot', tags:['sale','trending','all'], img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', bg:'#e8eaf6' },
    { id:5, name:'Leather Crossbody Bag', brand:'Coach', price:129.00, original:189.00, rating:4.6, reviews:178, badge:'sale', tags:['sale','all'], img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', bg:'#efebe9' },
    { id:6, name:'Slim-Fit Chino Trousers', brand:'Levi\'s', price:59.99, original:null, rating:4.5, reviews:97, badge:'new', tags:['new','all'], img:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80', bg:'#e8f5e9' },
    { id:7, name:'Gold Hoop Earrings Set', brand:'Mango', price:24.99, original:39.99, rating:4.8, reviews:445, badge:'sale', tags:['sale','trending','all'], img:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80', bg:'#fff9e6' },
    { id:8, name:'Smart Watch Series X', brand:'Apple', price:399.00, original:449.00, rating:4.9, reviews:2103, badge:'hot', tags:['new','trending','all'], img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', bg:'#e3f2fd' },
    { id:9, name:'Oversized Hoodie', brand:'Adidas', price:64.99, original:79.99, rating:4.7, reviews:562, badge:'sale', tags:['sale','new','all'], img:'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80', bg:'#f3e5f5' },
    { id:10, name:'Boho Maxi Skirt', brand:'Free People', price:74.00, original:null, rating:4.6, reviews:89, badge:'new', tags:['new','all'], img:'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80', bg:'#fce4ec' },
    { id:11, name:'Portable Bluetooth Speaker', brand:'JBL', price:79.99, original:119.99, rating:4.8, reviews:734, badge:'sale', tags:['sale','all'], img:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80', bg:'#e0f7fa' },
    { id:12, name:'Canvas Backpack', brand:'Herschel', price:54.99, original:74.99, rating:4.7, reviews:291, badge:'sale', tags:['sale','trending','all'], img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80', bg:'#f5f5f0' },
  ];

  /* ============================================
     CART DATA
  ============================================ */
  var CART_ITEMS = [
    { id:1, name:'Linen Summer Shirt', brand:'Zara', variant:'Size M / Beige', price:'49.99', qty:1, bg:'#f0e8d8', img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150&q=80' },
    { id:2, name:'Classic White Sneakers', brand:'Nike', variant:'Size 10 / White', price:'89.99', qty:1, bg:'#f0f0f0', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&q=80' },
    { id:4, name:'Wireless Headphones', brand:'Sony', variant:'Black', price:'149.99', qty:1, bg:'#e8eaf6', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80' },
    { id:7, name:'Gold Hoop Earrings', brand:'Mango', variant:'Gold / Set of 3', price:'24.99', qty:1, bg:'#fff9e6', img:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=150&q=80' },
  ];

  /* ============================================
     STAR RATING HTML
  ============================================ */
  function starsHTML(rating) {
    var html = '<div class="stars">';
    for (var i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) html += '<i class="fa-solid fa-star"></i>';
      else if (i - rating < 1) html += '<i class="fa-solid fa-star-half-stroke"></i>';
      else html += '<i class="fa-regular fa-star"></i>';
    }
    html += '</div>';
    return html;
  }

  /* ============================================
     BUILD PRODUCT CARD HTML
  ============================================ */
  function productCardHTML(p) {
    var badgeMap = { sale:'badge--sale', new:'badge--new', hot:'badge--hot' };
    var badgeTxt = p.badge ? p.badge.toUpperCase() : '';
    var saving = p.original ? Math.round((1 - p.price / p.original) * 100) : 0;
    return '<div class="product-card" data-id="'+p.id+'">' +
      '<div class="product-card__img-wrap">' +
        (p.badge ? '<div class="product-card__badges"><span class="badge '+(badgeMap[p.badge]||'')+'">'+badgeTxt+'</span></div>' : '') +
        '<img class="product-card__img" src="'+p.img+'" alt="'+p.name+'" loading="lazy"/>' +
        '<div class="product-card__actions">' +
          '<button class="product-action-btn" title="Wishlist"><i class="fa-regular fa-heart"></i></button>' +
          '<button class="product-action-btn" title="Quick View"><i class="fa-regular fa-eye"></i></button>' +
          '<button class="product-action-btn" title="Compare"><i class="fa-solid fa-code-compare"></i></button>' +
        '</div>' +
        '<button class="product-card__quick-add" data-id="'+p.id+'" data-name="'+p.name+'" data-price="'+p.price+'" data-brand="'+p.brand+'">+ Add to Cart</button>' +
      '</div>' +
      '<div class="product-card__info">' +
        '<div class="product-card__brand">'+p.brand+'</div>' +
        '<div class="product-card__name">'+p.name+'</div>' +
        '<div class="product-card__stars">'+starsHTML(p.rating)+'<span class="review-count">('+p.reviews+')</span></div>' +
        '<div class="product-card__price">' +
          '<span class="price-current">$'+p.price+'</span>' +
          (p.original ? '<span class="price-original">$'+p.original+'</span>' : '') +
          (saving ? '<span class="price-save">-'+saving+'%</span>' : '') +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ============================================
     RENDER PRODUCTS
  ============================================ */
  function renderProducts(containerId, count, filter) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var items = PRODUCTS;
    if (filter && filter !== 'all') {
      items = PRODUCTS.filter(function(p) { return p.tags && p.tags.indexOf(filter) > -1; });
    }
    items = items.slice(0, count || 8);
    container.innerHTML = items.map(productCardHTML).join('');
    bindQuickAdd(container);
  }

  /* ============================================
     CART DRAWER
  ============================================ */
  function buildCartDrawer() {
    var body = document.getElementById('cartBody');
    if (!body) return;
    if (CART_ITEMS.length === 0) {
      body.innerHTML = '<div class="cart-empty"><i class="fa-solid fa-bag-shopping"></i><p>Your cart is empty</p><a href="shop.html">Browse Products</a></div>';
      return;
    }
    body.innerHTML = CART_ITEMS.map(function(item) {
      return '<div class="cart-item" data-id="'+item.id+'">' +
        '<img class="cart-item__img" src="'+item.img+'" alt="'+item.name+'" onerror="this.style.background=\''+item.bg+'\';this.src=\'\'" />' +
        '<div class="cart-item__info">' +
          '<div class="cart-item__brand">'+item.brand+'</div>' +
          '<div class="cart-item__name">'+item.name+'</div>' +
          '<div class="cart-item__variant">'+item.variant+'</div>' +
          '<div class="cart-item__bottom">' +
            '<div class="cart-item__qty">' +
              '<button class="qty-btn qty-minus" data-id="'+item.id+'"><i class="fa-solid fa-minus"></i></button>' +
              '<span class="qty-val">'+item.qty+'</span>' +
              '<button class="qty-btn qty-plus" data-id="'+item.id+'"><i class="fa-solid fa-plus"></i></button>' +
            '</div>' +
            '<div class="cart-item__price">$'+item.price+'</div>' +
          '</div>' +
        '</div>' +
        '<button class="cart-item__remove" data-id="'+item.id+'"><i class="fa-solid fa-xmark"></i></button>' +
      '</div>';
    }).join('');
    // Bind qty and remove
    body.querySelectorAll('.qty-minus').forEach(function(btn) {
      btn.addEventListener('click', function() { adjustQty(this.dataset.id, -1); });
    });
    body.querySelectorAll('.qty-plus').forEach(function(btn) {
      btn.addEventListener('click', function() { adjustQty(this.dataset.id, 1); });
    });
    body.querySelectorAll('.cart-item__remove').forEach(function(btn) {
      btn.addEventListener('click', function() { removeFromCart(parseInt(this.dataset.id)); });
    });
  }

  function adjustQty(id, delta) {
    var item = CART_ITEMS.find(function(i) { return i.id == id; });
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    buildCartDrawer();
  }

  function removeFromCart(id) {
    var idx = CART_ITEMS.findIndex(function(i) { return i.id === id; });
    if (idx > -1) { CART_ITEMS.splice(idx, 1); }
    buildCartDrawer();
    updateCartCount();
  }

  function updateCartCount() {
    var count = CART_ITEMS.length;
    ['cartBadgeHeader','cartCountBadge'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) { el.textContent = count; }
    });
  }

  /* ============================================
     ADD TO CART
  ============================================ */
  function addToCart(id, name, price, brand) {
    var existing = CART_ITEMS.find(function(i) { return i.id == id; });
    if (existing) { existing.qty++; }
    else {
      CART_ITEMS.push({ id:parseInt(id), name:name, brand:brand, variant:'Default', price:price, qty:1, bg:'#f0f0f0', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&q=80' });
    }
    buildCartDrawer();
    updateCartCount();
    showToast(name, price);
    openCart();
  }

  function bindQuickAdd(container) {
    container.querySelectorAll('.product-card__quick-add').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        addToCart(this.dataset.id, this.dataset.name, this.dataset.price, this.dataset.brand);
      });
    });
  }

  /* ============================================
     CART OPEN / CLOSE
  ============================================ */
  function openCart() {
    var overlay = document.getElementById('cartOverlay');
    var drawer  = document.getElementById('cartDrawer');
    if (overlay) overlay.classList.add('is-open');
    if (drawer)  drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    var overlay = document.getElementById('cartOverlay');
    var drawer  = document.getElementById('cartDrawer');
    if (overlay) overlay.classList.remove('is-open');
    if (drawer)  drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  var cartToggle = document.getElementById('cartToggle');
  var cartClose  = document.getElementById('cartClose');
  var cartOverlay = document.getElementById('cartOverlay');
  if (cartToggle)  cartToggle.addEventListener('click', function(e) { e.preventDefault(); openCart(); });
  if (cartClose)   cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  /* ============================================
     TOAST NOTIFICATION
  ============================================ */
  function showToast(name, price) {
    var container = document.getElementById('toastContainer');
    if (!container) return;
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="fa-solid fa-bag-shopping"></i><div class="toast__text"><strong>Added to cart!</strong><span>'+name+' &mdash; $'+price+'</span></div>';
    container.appendChild(toast);
    setTimeout(function() { toast.classList.add('is-visible'); }, 10);
    setTimeout(function() {
      toast.classList.remove('is-visible');
      setTimeout(function() { toast.remove(); }, 400);
    }, 3000);
  }

  /* ============================================
     PRODUCT TABS (homepage)
  ============================================ */
  var tabs = document.querySelectorAll('.product-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('is-active'); });
      this.classList.add('is-active');
      renderProducts('featuredGrid', 4, this.dataset.filter);
    });
  });

  /* ============================================
     NEWSLETTER
  ============================================ */
  window.handleNewsletter = function(e) {
    e.preventDefault();
    showToast('Newsletter', '0');
    var btn = e.target.querySelector('button');
    btn.textContent = 'Subscribed!';
    btn.style.background = '#15803d';
    e.target.reset();
    setTimeout(function() { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
  };

  /* ============================================
     INIT
  ============================================ */
  function init() {
    buildCartDrawer();
    updateCartCount();
    renderProducts('featuredGrid', 4, 'all');
    renderProducts('newArrivalsSlider', 4, 'new');
    renderProducts('shopGrid', 12, 'all');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expose for external use */
  window.LUXE = { cartItems: CART_ITEMS, renderProducts: renderProducts, addToCart: addToCart, showToast: showToast };

})();
