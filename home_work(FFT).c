/*
 *    C语言实现 N=1024 FFT算法   
 *    验证序列：x[k]=sin(2*PI/N*k)
 *    
 *    Author: 90後_小熊大
 *    说明：代码经过实际验证，可以正常运行。
 *         代码仅供参考，欢迎学习交流！
 */
// # include <v8.h>
// # include <node.h>
# include <stdio.h>
# include <math.h>
 
//定义PI
#define   PI   acos(-1.0)
 
//复数，结构体
typedef struct{
    float re;
    float im;
}Complex;
 
Complex x[1024];
Complex y[1024];
 
 
//-------------------------复数运算相关-----------------------------
 
Complex creatComplex(float re, float im){  //生成复数
    Complex z;
    z.re = re;
    z.im = im;
    return z;
}
 
Complex add(Complex z1, Complex z2){  //复数加法
    Complex z;
    z.re = z1.re + z2.re;
    z.im = z1.im + z2.im;
    return z;
}
 
Complex sub(Complex z1, Complex z2){  //复数减法
    Complex z;
    z.re = z1.re - z2.re;
    z.im = z1.im - z2.im;
    return z;
}
 
Complex mul(Complex z1, Complex z2){  //复数乘法
    Complex z;
    z.re = (z1.re * z2.re) - (z1.im * z2.im);
    z.im = (z1.re * z2.im) + (z1.im * z2.re);
    return z;
}
 
void printComplex_0(Complex z){       //打印函数
    if(z.re==0 && z.im==0)
        printf(" 0   ");
    else if(z.re!=0 && z.im==0)
    {
        if(z.re>0)
            printf(" %2.2f", z.re);
        else
            printf("%2.2f", z.re);
    }
 
    else if(z.re==0 && z.im!=0)
    {
        if(z.im>0)
            printf("       j%.2f", z.im);
        else if(z.im<0)
            printf("      -j%.2f", fabs(z.im));
    }
    else
    {
        if(z.im>0)
            printf("%2.2f + j%2.2f", z.re, z.im);
        else
            printf("%2.2f - j%2.2f", z.re, fabs(z.im));
    }
}
 
void printComplex_1(Complex z){       //打印函数
    int re, im;
    re = z.re;
    im = z.im;
 
    if(re==0 && im==0)
        printf("0\n");
    else if(re!=0 && im==0)
        printf("%.2f\n", re);
    else if(re==0 && im!=0)
    {
        if(im>0)
            printf("j%.2f\n",  fabs(im));
        else if(im<0)
            printf("-j%.2f\n", fabs(im));
    }
    else
    {
        if(im>0)
            printf("%.2f + j%.2f\n", re, im);
        else
            printf("%.2f - j%.2f\n", re, fabs(im));
    }
}
 
Complex creat_W(int N, int mk){       //生成旋转因子
    Complex W;
    W.re = cos(-(2 * PI/N * mk));
    W.im = sin(-(2 * PI/N * mk));
    return W;
}
 
//--------------------------------------------------------------------------
 
 
void Reverse_Order(unsigned int Input_Data){  //序列倒序运算
    unsigned int One_Binary_Data[10];
    unsigned int i;
    unsigned int Reverse_Order_Data;
    unsigned int label;
 
    label = Input_Data;
 
    for(i=0; i<10; i++){
        One_Binary_Data[i] = Input_Data % 2;
        Input_Data = Input_Data / 2;
    }
 
    Reverse_Order_Data = One_Binary_Data[0]*pow(2, 9) + One_Binary_Data[1]*pow(2, 8) + One_Binary_Data[2]*pow(2, 7) +\
                         One_Binary_Data[3]*pow(2, 6) + One_Binary_Data[4]*pow(2, 5) + One_Binary_Data[5]*pow(2, 4) +\
                         One_Binary_Data[6]*pow(2, 3) + One_Binary_Data[7]*pow(2, 2) + One_Binary_Data[8]*pow(2, 1) +\
                         One_Binary_Data[9]*pow(2, 0);
 
    y[label] = x[Reverse_Order_Data];
}
 
 
void FFT()   //Fast Fourier Transfortation
{
    int i, j;
    int M;
    int N, mk;                 //旋转矩阵参数
    Complex temp1, temp2;      //临时存放
    Complex W;                 //旋转矩阵
    for(i=0; i<10; i++)        //十层循环
    {
        for(j=0; j<512; j++)   //每层512个蝶形运算
        {
            M  = j / (int)pow(2, i);
            mk = j % (int)pow(2, i);
            N = pow(2, i+1);
 
            W = creat_W(N, mk);
            temp1 = y[(int)(j + M*pow(2, i))];
            temp2 = y[(int)(j + M*pow(2, i) + pow(2, i))];
            temp2 = mul(W, temp2);
 
            y[(int)(j + M*pow(2, i))] = add(temp1, temp2);
            y[(int)(j + M*pow(2, i) + pow(2, i))] = sub(temp1, temp2);
        }
    }
}
 
 
int main(){
    int Input_Label;
    int i;
    float temp;
 
    for(i=0; i<1024; i++){
        temp = sin(2*PI/1024*i);
        x[i] = creatComplex(temp, 0);
    }
 
    printf("++++++++++++++++++++++++++++++++++++++++++++++++\n");
    printf("+                                              +\n");
    printf("+     N=1024 FFT算法   Author: 90後_小熊大       +\n");
    printf("+                                              +\n");
    printf("+     验证序列：x[k]=sin(2*PI/N*k)             +\n");
    printf("+                                              +\n");
    printf("++++++++++++++++++++++++++++++++++++++++++++++++\n\n\n");
    printf("     原始序列:  --------- FFT ---------> 输出序列：\n\n");
    for(Input_Label=0; Input_Label<1024; Input_Label++){
        Reverse_Order(Input_Label);
    }
 
    FFT();
 
    for(i=0; i<1024; i++)
    {
        printf("x[%4d] = ", i);
        printComplex_0(x[i]);
        printf(" --------- FFT ---------> ");
        printf("X[%4d] = ", i);
        printComplex_1(y[i]);
    }
    return 0;
}