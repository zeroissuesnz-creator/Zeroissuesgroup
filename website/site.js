document.querySelectorAll('[data-app-link]').forEach(a=>a.href=window.ZERO_ISSUES.stayLedgerApp);
document.querySelectorAll('[data-email]').forEach(a=>{a.href='mailto:'+window.ZERO_ISSUES.contactEmail+'?subject='+encodeURIComponent(a.dataset.subject||'Zero Issues enquiry');if(a.hasAttribute('data-email-text'))a.textContent=window.ZERO_ISSUES.contactEmail;});

