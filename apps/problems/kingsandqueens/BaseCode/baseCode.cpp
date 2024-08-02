#include <iostream>
#include <vector>
using namespace std;

##USER_CODE_HERE##

int main() {
    int a, b, x_k, y_k, x_q, y_q;
    cin>>a>>b;
    cin>>x_k>>y_k;
    cin>>x_q>>y_q;
    int result;
    result = kingQueen(a, b, x_k, y_k, x_q, y_q);
    cout<<result;
    return 0;
}