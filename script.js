// Months by season
var winter = ["December", "January", "February"];
var spring = ["March", "April", "May"];
var summer = ["June", "July", "August"];
var fall   = ["September", "October", "November"];

// Images by season
var winterImages = [
  "https://brooklynslifestyle.com/wp-content/uploads/2023/11/6ADDF9C5-37C2-4C16-8111-D238984FDBB5.png",
  "https://www.tripsavvy.com/thmb/hfQhdozd9Zy-FHGzF1roVhndgz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/winter-in-new-york-city-183792286-58fdec495f9b581d59947b15.jpg",
  "https://cdn-imgix.headout.com/media/images/db8841d69eb9eea0afcdb84d07f56c3b-New%20york%20snow.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop"
];

var springImages = [
  "https://www.tripsavvy.com/thmb/gGLkC_a6yB1DLSdEvHHWnqyEtQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rear-view-of-woman-sitting-on-bench-at-central-park-in-city-699092695-5a1f1442ec2f640037eeb5d8.jpg",
  "https://cdn-imgix.headout.com/media/images/0a4f369392eb1e90d95c4c760df35269-Central%20Park.jpg",
  "https://cdn-imgix.headout.com/media/images/3349b78a4d8ea0a13585c4cda46575a7-Central%20park.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop"
];

var summerImages = [
  "https://www.bestofnewyork.com/wp-content/uploads/2023/05/New-York-In-June-featured-image.jpeg",
  "https://qtxasset.com/quartz/qcloud1/media/image/travelagentcentral/1561728729/macysfourthofjulyfireworks.jpg?VersionId=Rl0IqKBjz2axo46hbwZPSqaag1RClA0a",
  "https://newyorkcitypoi.com/wp-content/uploads/2023/11/shutterstock_711159319.jpg"
];

var fallImages = [
  "https://www.new-york-city-travel-tips.com/wordpress/wp-content/uploads/2013/08/AB-Fall-NYC1-590x393.png",
  "https://media.timeout.com/images/105712510/image.jpg",
  "https://image.newyork.co.uk/wp-content/uploads/2014/01/Thanksgiving-in-New-York-1.jpeg.webp"
];

// Reusable function (Advanced Challenge)
function displaySeason(months, images, seasonClass) {
  var container = document.querySelector("." + seasonClass);
  container.innerHTML = "";

  months.forEach(function(month, index) {
    var html = `
      <div class="col-md-4 mb-3">
        <div class="month-card">
          <img src="${images[index]}" alt="${month}">
          <div class="month-card-body">
            <h5>${month}</h5>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
}


// Display all seasons
function displayAllSeasons() {
  displaySeason(spring, springImages, "spring");
  displaySeason(summer, summerImages, "summer");
  displaySeason(fall, fallImages, "fall");
  displaySeason(winter, winterImages, "winter");
}

// Run
displayAllSeasons();



