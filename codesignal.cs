public class Car {
    public string color;
    public int miles;
    public string make;
    public bool tankFull;
    public void Car(string make, int miles, string color, bool tankFull){
        make = make;
        miles = miles;
        color = color;
        tankFull = tankFull;
    }
}

Car bmw = new Car("BMW", 109000, 'red', false);
Car mazda = new Car("Mazda", 0, 'blue', true);