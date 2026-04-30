
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BVYsYAdG.js","/cdn/shopifycloud/checkout-web/assets/c1/app.Bbmm7v-D.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-es.DYTFykuZ.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.ZnX2u1ul.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.Bm6oW2ox.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.DQA2JHQ_.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.DDzpLgA4.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.CsMXg843.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.D61399NL.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.D54dc89k.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.D0zC6wjC.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.D7ifbws0.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.DJ41Ozet.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager.DlfwijN0.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod.Be2b19PZ.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.D4aABzu4.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.uqo5uGH4.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.CkZ4yv5T.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.9SF7yT8i.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.CIOi2yaW.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.DgYp__da.js","/cdn/shopifycloud/checkout-web/assets/c1/index.DLxj32eA.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CjGn_Lz5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BE3bhd3W.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.Ca9titpM.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.Cuz4ryjJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CBpWLJzT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  