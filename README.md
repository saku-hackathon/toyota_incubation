# toyota_incubation

# abstruct
This project is made for Astar hackathon.
# contracts
There are two contracts to participate toyota_incubation app.
- NFT Contract  
 name: `SBT`  
 contract address: `0xB42f2F8e67CE770e4E7430316B1Ea1889B950e1A`  
 links:   
  - https://shibuya.subscan.io/account/0xB42f2F8e67CE770e4E7430316B1Ea1889B950e1A  
  - https://blockscout.com/shibuya/address/0xB42f2F8e67CE770e4E7430316B1Ea1889B950e1A  
- ERC20 Contract  
 name: `Toyota Token`  
 Ticker: `TTY`  
 contract address: `0x67aB4032a879E4a13860fa3b1050e09d57450FdA`  
 links:   
  - https://shibuya.subscan.io/account/0x67ab4032a879e4a13860fa3b1050e09d57450fda?tab=contract  
  - https://blockscout.com/shibuya/address/0x67aB4032a879E4a13860fa3b1050e09d57450FdA  

# ミント方法  
1. 下記のRemixを開き、SBYに接続したウォレットに接続  
https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js  
2. Deploy & Run transactionsタブを選択  
 - NFT発行  
   - SBTタブを開き、mintの`to`にNFTを取得したいアドレスを入力。`amount`も入力（最大1）  
   - transactをクリックして接続したウォレットで署名 
   ![Uploading image.png…]()

 - TTYの取得  
   - TOYOTATOKENタブを選択し、mintの`_mintAmount`に数量を入力  
   - transactをクリックして接続したウォレットで署名  
   ![Uploading image.png…]()
