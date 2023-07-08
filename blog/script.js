// Function to show the newsletter popup
function showNewsletterPopup() {
    var newsletterPopup = document.getElementById('newsletter');
    newsletterPopup.classList.add('active');
    document.getElementById('payTxt').innerHTML = "We (I myself and a group of engineers) are planning to make AI news more accessible, and we need your help in funds!";
    document.getElementById('action').innerHTML = "Please Donate!";
    document.getElementById('donateTxt').href = "https://www.airfunding.net/project/774411?hl=en&utm_source=copied_url&utm_medium=social&utm_campaign=project_first_shares&utm_content=project_id_774411";
}

// Function to hide the newsletter popup
function hideNewsletterPopup() {
    var newsletterPopup = document.getElementById('newsletter');
    newsletterPopup.classList.remove('active');
}

// Wait for 2 minutes and show the popup
setTimeout(showNewsletterPopup, 200);