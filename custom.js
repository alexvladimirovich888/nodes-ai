// Node AI - Interactive Enhancements, Mobile Navigation & Registration/Checkout Modal
(function() {
  // 1. Modal HTML Template
  var modalHTML = `
  <div id="node-checkout-modal" class="checkout-modal-backdrop" aria-hidden="true">
    <div class="checkout-modal-dialog" role="dialog" aria-labelledby="modal-title">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-green animate-pulse"></span>
            <h3 id="modal-title" class="text-xl font-bold text-white">Node AI &bull; Registration & Checkout</h3>
          </div>
          <p class="text-xs text-grey mt-1">Deploy high-performance GPU instances with zero manual configuration.</p>
        </div>
        <button id="modal-close-btn" class="p-2 text-grey hover:text-white rounded-full hover:bg-white/10 transition" aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Plan / Order Summary Banner -->
      <div class="p-4 rounded-2xl bg-white/[0.03] border border-green/30 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span class="text-[10px] font-mono text-grey uppercase tracking-wider block">Selected Hardware Instance</span>
          <h4 id="checkout-node-name" class="text-base font-bold text-white">NVIDIA A100 (80GB) &bull; 32 vCPU / 128GB</h4>
          <span id="checkout-node-region" class="text-xs text-grey font-mono">Region: US-East (N. Virginia) &bull; Instant SLA</span>
        </div>
        <div class="text-left md:text-right">
          <span class="text-[10px] font-mono text-grey uppercase tracking-wider block">Hourly Rate</span>
          <div class="flex items-baseline gap-1">
            <span id="checkout-node-price" class="text-2xl font-bold text-green font-mono">$1.29</span>
            <span class="text-xs text-grey">/hr</span>
          </div>
        </div>
      </div>

      <form id="checkout-form" onsubmit="return false;" class="space-y-6">
        
        <!-- Step 1: User Account Registration -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-5 h-5 rounded-full bg-green text-black font-bold flex items-center justify-center text-[10px]">1</span>
            <span class="text-xs font-mono uppercase tracking-wider text-white font-semibold">Account Registration</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-mono text-grey mb-1">Full Name / Organization *</label>
              <input type="text" id="cust-name" required placeholder="Name or Company" class="checkout-input" />
            </div>
            <div>
              <label class="block text-[11px] font-mono text-grey mb-1">Email Address (for API & SSH keys) *</label>
              <input type="email" id="cust-email" required placeholder="name@domain.com" class="checkout-input" />
            </div>
          </div>
        </div>

        <!-- Step 2: Payment Method Selection -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-green text-black font-bold flex items-center justify-center text-[10px]">2</span>
              <span class="text-xs font-mono uppercase tracking-wider text-white font-semibold">Payment Method</span>
            </div>
            <span class="text-[11px] text-green font-mono">256-Bit SSL Encrypted</span>
          </div>

          <!-- Payment Tabs -->
          <div class="flex gap-2 mb-4">
            <button type="button" class="payment-tab-btn is-active" data-tab="card">
              <span>💳</span> Bank Card
            </button>
            <button type="button" class="payment-tab-btn" data-tab="usdt">
              <span>💎</span> USDT (Tether)
            </button>
            <button type="button" class="payment-tab-btn" data-tab="eth">
              <span>⚡</span> Ethereum (ETH)
            </button>
          </div>

          <!-- Card Details Tab Content -->
          <div id="tab-content-card" class="space-y-3 p-4 rounded-2xl bg-black/60 border border-white/10">
            <div>
              <label class="block text-[11px] font-mono text-grey mb-1">Card Number</label>
              <div class="relative">
                <input type="text" id="card-num" placeholder="0000 0000 0000 0000" maxlength="19" class="checkout-input font-mono" />
              </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-mono text-grey mb-1">Cardholder Name</label>
                <input type="text" id="card-name" placeholder="YOUR NAME" class="checkout-input font-mono uppercase" />
              </div>
              <div>
                <label class="block text-[11px] font-mono text-grey mb-1">Expires (MM/YY)</label>
                <input type="text" id="card-exp" placeholder="MM/YY" maxlength="5" class="checkout-input font-mono" />
              </div>
              <div class="col-span-2 md:col-span-1">
                <label class="block text-[11px] font-mono text-grey mb-1">CVC / CVV</label>
                <input type="password" id="card-cvc" placeholder="•••" maxlength="4" class="checkout-input font-mono" />
              </div>
            </div>
          </div>

          <!-- USDT Tab Content -->
          <div id="tab-content-usdt" class="space-y-4 p-4 rounded-2xl bg-black/60 border border-white/10 hidden">
            <div class="flex items-center justify-between">
              <span class="text-xs text-white font-semibold">Select Network:</span>
              <div class="flex gap-2 text-xs font-mono">
                <button type="button" class="px-2.5 py-1 rounded bg-green/20 text-green border border-green/40 font-semibold">ERC-20</button>
                <button type="button" class="px-2.5 py-1 rounded bg-white/5 text-grey border border-white/10 hover:text-white">TRC-20</button>
                <button type="button" class="px-2.5 py-1 rounded bg-white/5 text-grey border border-white/10 hover:text-white">Arbitrum</button>
              </div>
            </div>

            <div class="p-3 rounded-xl bg-black border border-white/10 flex flex-col md:flex-row items-center gap-4">
              <div class="w-20 h-20 bg-white p-1.5 rounded-lg flex-shrink-0 flex items-center justify-center">
                <!-- QR Code SVG preview -->
                <svg viewBox="0 0 100 100" class="w-full h-full text-black" fill="currentColor">
                  <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,10 h10 v10 h-10 z M40,40 h20 v20 h-20 z M70,70 h10 v10 h-10 z M80,80 h20 v20 h-20 z M40,70 h10 v30 h-10 z M70,40 h30 v10 h-30 z" />
                </svg>
              </div>
              <div class="flex-grow w-full">
                <label class="block text-[10px] font-mono text-grey mb-1">Official USDT Deposit Address (Smart Escrow):</label>
                <div class="flex items-center gap-2">
                  <input type="text" readonly value="0x71C2d6c1A3b8e4E798d578B3F4d8E3d58aF94e89" id="usdt-addr" class="checkout-input font-mono text-xs text-green select-all" />
                  <button type="button" id="copy-usdt-btn" class="px-3 py-2 rounded-xl bg-white/10 hover:bg-green hover:text-black text-xs font-mono font-semibold transition">Copy</button>
                </div>
                <span class="text-[10px] text-grey block mt-1">Instant automatic balance crediting after 1 network confirmation.</span>
              </div>
            </div>
          </div>

          <!-- Ethereum Tab Content -->
          <div id="tab-content-eth" class="space-y-4 p-4 rounded-2xl bg-black/60 border border-white/10 hidden">
            <div class="p-3 rounded-xl bg-black border border-white/10 flex flex-col md:flex-row items-center gap-4">
              <div class="w-20 h-20 bg-white p-1.5 rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" class="w-full h-full text-black" fill="currentColor">
                  <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M50,20 h10 v20 h-10 z M30,50 h40 v10 h-40 z M60,70 h30 v30 h-30 z" />
                </svg>
              </div>
              <div class="flex-grow w-full">
                <label class="block text-[10px] font-mono text-grey mb-1">ETH Deposit Address:</label>
                <div class="flex items-center gap-2">
                  <input type="text" readonly value="0x89eE52c34d81FaF2a739501B563D4e04318c643B" id="eth-addr" class="checkout-input font-mono text-xs text-green select-all" />
                  <button type="button" id="copy-eth-btn" class="px-3 py-2 rounded-xl bg-white/10 hover:bg-green hover:text-black text-xs font-mono font-semibold transition">Copy</button>
                </div>
                <button type="button" id="web3-connect-btn" class="mt-2 w-full py-2 rounded-xl border border-green/50 text-green hover:bg-green/10 text-xs font-mono font-bold flex items-center justify-center gap-2 transition">
                  <span>🦊</span> Connect Web3 Wallet (MetaMask / WalletConnect)
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- Submit & Provision Button -->
        <div>
          <button type="button" id="modal-submit-btn" class="w-full py-4 rounded-2xl bg-green text-black font-bold text-sm hover:shadow-[0_0_30px_rgba(76,192,84,0.6)] transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2">
            <span>🔒</span> PAY &amp; PROVISION NODE INSTANTLY
          </button>
          <div class="flex items-center justify-center gap-6 mt-3 text-[11px] text-grey">
            <span>&bull; No lock-in period</span>
            <span>&bull; Cancel anytime</span>
            <span>&bull; 99.98% SLA Guarantee</span>
          </div>
        </div>

      </form>

      <!-- Provisioning Status Screen (Hidden Initially) -->
      <div id="checkout-success-view" class="hidden text-center py-6 space-y-4">
        <div class="w-16 h-16 bg-green/20 border-2 border-green rounded-full flex items-center justify-center mx-auto text-green text-2xl animate-bounce">
          ✓
        </div>
        <h4 class="text-2xl font-bold text-white">Payment Verified &bull; Node Online</h4>
        <p class="text-sm text-grey max-w-md mx-auto">Your high-performance node instance has been securely initialized in our enclave cluster.</p>
        
        <div class="p-4 rounded-2xl bg-black border border-white/10 text-left font-mono text-xs space-y-2 max-w-lg mx-auto">
          <div class="flex justify-between text-grey">
            <span>Instance ID:</span>
            <span class="text-white">node-ai-8942-sxm5</span>
          </div>
          <div class="flex justify-between text-grey">
            <span>API Endpoint:</span>
            <span class="text-green">https://node-8942.nodes.ai:8000/v1</span>
          </div>
          <div class="flex justify-between text-grey">
            <span>SSH Access:</span>
            <span class="text-white">ssh root@node-8942.nodes.ai -p 2202</span>
          </div>
        </div>

        <button type="button" id="success-done-btn" class="px-8 py-3 rounded-full bg-green text-black font-bold text-xs hover:shadow-[0_0_20px_rgba(76,192,84,0.5)] transition">
          GO TO NODE DASHBOARD
        </button>
      </div>

    </div>
  </div>
  `;

  // 2. Initialize Modal and Event Listeners
  function initCheckoutModal() {
    if (!document.getElementById('node-checkout-modal')) {
      document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    var modal = document.getElementById('node-checkout-modal');
    var closeBtn = document.getElementById('modal-close-btn');
    var submitBtn = document.getElementById('modal-submit-btn');
    var successView = document.getElementById('checkout-success-view');
    var form = document.getElementById('checkout-form');
    var successDoneBtn = document.getElementById('success-done-btn');

    // Close logic
    function closeModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      if (form) form.classList.remove('hidden');
      if (successView) successView.classList.add('hidden');
      if (submitBtn) {
        submitBtn.innerHTML = '<span>🔒</span> PAY &amp; PROVISION NODE INSTANTLY';
        submitBtn.disabled = false;
      }
    }

    if (closeBtn) closeBtn.onclick = closeModal;
    if (successDoneBtn) successDoneBtn.onclick = closeModal;

    modal.onclick = function(e) {
      if (e.target === modal) closeModal();
    };

    // Tabs switching
    var tabBtns = modal.querySelectorAll('.payment-tab-btn');
    tabBtns.forEach(function(btn) {
      btn.onclick = function() {
        tabBtns.forEach(function(b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var tab = btn.getAttribute('data-tab');
        document.getElementById('tab-content-card').classList.toggle('hidden', tab !== 'card');
        document.getElementById('tab-content-usdt').classList.toggle('hidden', tab !== 'usdt');
        document.getElementById('tab-content-eth').classList.toggle('hidden', tab !== 'eth');
      };
    });

    // Copy buttons
    var copyUsdt = document.getElementById('copy-usdt-btn');
    if (copyUsdt) {
      copyUsdt.onclick = function() {
        var val = document.getElementById('usdt-addr').value;
        navigator.clipboard.writeText(val);
        copyUsdt.innerText = 'Copied!';
        setTimeout(function() { copyUsdt.innerText = 'Copy'; }, 2000);
      };
    }

    var copyEth = document.getElementById('copy-eth-btn');
    if (copyEth) {
      copyEth.onclick = function() {
        var val = document.getElementById('eth-addr').value;
        navigator.clipboard.writeText(val);
        copyEth.innerText = 'Copied!';
        setTimeout(function() { copyEth.innerText = 'Copy'; }, 2000);
      };
    }

    // Web3 connect simulation
    var web3Btn = document.getElementById('web3-connect-btn');
    if (web3Btn) {
      web3Btn.onclick = function() {
        web3Btn.innerText = 'Connecting MetaMask...';
        setTimeout(function() {
          web3Btn.innerHTML = '✓ Connected: 0x4a12...89bE (Balance: 2.84 ETH)';
          web3Btn.classList.add('bg-green/20');
        }, 800);
      };
    }

    // Submit handler
    if (submitBtn) {
      submitBtn.onclick = function() {
        var email = document.getElementById('cust-email');
        if (email && !email.value) {
          alert('Please enter your email address for node credentials.');
          email.focus();
          return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⏳</span> Verifying Payment & Allocating GPU...';

        setTimeout(function() {
          if (form) form.classList.add('hidden');
          if (successView) successView.classList.remove('hidden');
        }, 1800);
      };
    }

    // 3. Attach open triggers to all checkout/deploy buttons across the site
    function attachTriggers() {
      var triggers = document.querySelectorAll(`
        a[href*="deploy.html"]:not(nav a):not(header a),
        a[href*="rent.html"]:not(nav a):not(header a),
        button#deploy-btn,
        .deploy-btn,
        a.group[href*="deploy"]:not(nav a):not(header a),
        a.group[href*="rent"]:not(nav a):not(header a)
      `);

      triggers.forEach(function(el) {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Try to detect node name / price from context
          var card = el.closest('.rounded-2xl') || el.closest('.rounded-3xl') || el.closest('.group') || el.closest('.flex-col');
          var name = card ? card.querySelector('h3, h2, h4')?.textContent?.trim() : null;
          var priceEl = card ? (card.querySelector('.text-2xl.font-bold') || card.querySelector('.text-3xl.font-bold') || card.querySelector('.font-mono.text-green')) : null;
          var price = priceEl ? priceEl.textContent.trim() : null;

          // In deploy.html, check selected radios
          var selectedHw = document.querySelector('input[name="hardware"]:checked');
          var selectedTpl = document.querySelector('input[name="template"]:checked');
          if (selectedHw && el.id === 'deploy-btn') {
            var hwCard = selectedHw.closest('label');
            name = hwCard ? hwCard.querySelector('span.font-bold')?.textContent?.trim() : 'NVIDIA A100 (80GB)';
            var tplCard = selectedTpl ? selectedTpl.closest('label') : null;
            var tplName = tplCard ? tplCard.querySelector('span.font-bold')?.textContent?.trim() : 'DeepSeek-R1 / vLLM';
            name = name + ' &bull; ' + tplName;
            var hwPrice = hwCard ? hwCard.querySelector('.text-green')?.textContent?.trim() : '$1.29';
            price = hwPrice;
          }

          if (name && document.getElementById('checkout-node-name')) {
            document.getElementById('checkout-node-name').innerHTML = name;
          }
          if (price && price.includes('$') && document.getElementById('checkout-node-price')) {
            document.getElementById('checkout-node-price').textContent = price;
          }

          modal.classList.add('is-active');
          modal.setAttribute('aria-hidden', 'false');
        });
      });
    }

    attachTriggers();
  }

  // 4. Mobile Navigation Handler
  function initMobileMenu() {
    var toggleBtn = document.querySelector('button[aria-label="Toggle menu"]');
    var nav = document.querySelector('nav[aria-label="Main navigation"]');
    var mobileBg = document.getElementById('mobile-nav-bg');

    if (toggleBtn && nav) {
      toggleBtn.addEventListener('click', function() {
        var isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        if (!isExpanded) {
          nav.style.opacity = '1';
          nav.style.pointerEvents = 'auto';
          nav.style.display = 'flex';
          if (mobileBg) {
            mobileBg.classList.remove('-translate-y-full');
            mobileBg.style.transform = 'translateY(0)';
          }
        } else {
          nav.style.opacity = '';
          nav.style.pointerEvents = '';
          nav.style.display = '';
          if (mobileBg) {
            mobileBg.style.transform = '';
            mobileBg.classList.add('-translate-y-full');
          }
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initMobileMenu();
      initCheckoutModal();
    });
  } else {
    initMobileMenu();
    initCheckoutModal();
  }
})();
