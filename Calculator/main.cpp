#include <iostream>
#include "Calculations.h"

using namespace std;

int main()
{
    int num1, num2;
    char op;
    while(true){
    cin >> num1 >> op >> num2;
    Calculations calc(num1, num2);

    if(op == '+')
        calc.add();

    else if(op == '-')
        calc.sub();

    else if(op == '*')
        calc.mult();

    else if(op == '/')
        calc.div();

    else
        cout << "Syntax Error\n";
    }

    return 0;
}
