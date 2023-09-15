// Define the Driver constructor function
function Driver(name, age, workExperience) {
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
}

// Add methods to the Driver prototype
Driver.prototype.driveMyCar = function () {
    alert(`${this.name} is driving the car.`);
};

Driver.prototype.carWash = function () {
    alert(`${this.name} is washing the car.`);
};

// Create instances of the Driver object
const toto = new Driver("Toto", 30, 5);
const boy = new Driver("Boy", 25, 2);

// Add event listeners to the buttons
const driveButton = document.getElementById("driveButton");
const washButton = document.getElementById("washButton");

driveButton.addEventListener("click", function () {
    toto.driveMyCar();
    updateDriverInfo(toto);
});

washButton.addEventListener("click", function () {
    boy.carWash();
    updateDriverInfo(boy);
});

// Function to update driver information on the page
function updateDriverInfo(driver) {
    const driverNameElement = document.getElementById("driverName");
    const driverAgeElement = document.getElementById("driverAge");
    const driverExperienceElement = document.getElementById("driverExperience");

    driverNameElement.textContent = driver.name;
    driverAgeElement.textContent = driver.age;
    driverExperienceElement.textContent = driver.workExperience;
}