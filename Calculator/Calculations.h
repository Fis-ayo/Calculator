#ifndef CALCULATIONS_H
#define CALCULATIONS_H


class Calculations
{
    public:
        Calculations(int num1, int num2);
        void add();
        void sub();
        void mult();
        void div();
        int addition;
        int subtraction;
        int multiplication;
        int division;

    protected:

    private:
        int Num1;
        int Num2;
        char adsm;
};

#endif // CALCULATIONS_H
