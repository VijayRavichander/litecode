#include <iostream>
#include <vector>
using namespace std;

##USER_CODE_HERE##

int main() {
    int n;
    cin>>n;
    int k;
    cin>>k;
    char x[10];
    vector<int> ans(n);
    for(auto it: ans) cin>>ans[it];
    x = box(ans, k);
    cout<<x;
    return 0;
}