const packages = [
  {
    priorityLevel: "false",
    isFragile: false,
    weight: 2,
    to: "Sir Harrington IV",
    trackingNumber: "1324kjs",
  },
  {
    priorityLevel: "false",
    isFragile: true,
    weight: 0.5,
    to: "Master Mercutio",
    trackingNumber: "1325sdk",
  },
  {
    priorityLevel: "true",
    isFragile: true,
    weight: 0.5,
    to: "Mistress Ravenfeather",
    trackingNumber: "jffd147",
  },
  {
    priorityLevel: "false",
    isFragile: false,
    weight: 4,
    to: "B. Robert Brown",
    trackingNumber: "acdc145",
  },
  {
    priorityLevel: "true",
    isFragile: true,
    weight: 6,
    to: "Chancellor Wallace",
    trackingNumber: "1970dub",
  },
  {
    priorityLevel: "true",
    isFragile: false,
    weight: 5,
    to: "Sarah Sharm",
    trackingNumber: "8081baz",
  },
  {
    priorityLevel: "false",
    isFragile: true,
    weight: 12,
    to: "Tae Lien",
    trackingNumber: "suz2367",
  },
];

// let heavyPackages = packages.filter((package) => package.weight >= 5);

function drawPackages(packages) {
  let packageTable = document.getElementById("table");
  let template = "";

  packages.forEach((package) => {
    template += `<tr>
              <th scope="row">${package.to}</th>
              <td>${package.trackingNumber}</td>
              <td>${package.priorityLevel}</td>
              <td>${package.weight}</td>
              <td>${package.isFragile}</td>
            </tr>`;
  });
  // @ts-ignore
  packageTable.innerHTML = template;
}

function heavyFilter() {
  let heavyPackages = packages.filter((package) => package.weight >= 5);
  drawPackages(heavyPackages);
}

function fragileFilter() {
  let fragilePackages = packages.filter((package) => package.isFragile);
  drawPackages(fragilePackages);
}

function priorityFilter() {
  let priorityPack = packages.filter(
    (package) => package.priorityLevel == "true"
  );
  drawPackages(priorityPack);
}

drawPackages(packages);
