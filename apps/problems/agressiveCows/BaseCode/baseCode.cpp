#include<bits/stdc++.h>
using namespace std;

##USER_CODE_HERE##

int main() {
   long long n, c;
   cin>>n>>c;
   vector<long long>barns(n);
   for(auto&it: barns){
    cin>>it;
   }
   cout<<aggressiveCows(n, c, barns);
    return 0;
}