#include "Calculations.h"
#include <iostream>
#include <string>
#include <cmath>

using namespace std;

Calculations::Calculations(int num1, int num2)
{
    //ctor
    Num1 = num1;
    Num2 = num2;

}

void Calculations::add(){

    int addition = Num1 + Num2;
   cout << addition << endl;

}
void Calculations::sub() {

    subtraction = Num1 - Num2;
    cout << subtraction << endl;

}
void Calculations::mult(){

    multiplication = Num1 * Num2;
    cout <<  multiplication << endl;

}
void Calculations::div(){

    division = Num1 / Num2;
    cout << division << endl;

}

