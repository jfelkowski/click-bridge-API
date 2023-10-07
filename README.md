# ClickBridge API Reference

### **Introduction**

  - Summary
    - The ClickBridge API presents data on how people get to a Wikipedia article. The data includes where they came from, how many people came from there, and type of referral. 
  
    - The data is a monthly-generated clickstream for Wikipedia in English. The current dataset in use is updated monthly, reflecting the most recently completed calender month.
  
  - Base URL 
    - http://api.clickbridge.com -- ?


### **Search**

  - ClickBridge provides a search box to query the dataset. This is where a user enters the title of a Wikipedia article. After clicking submit, resulting data is listed below.
 
    - **GET** /api/search
      - Returns a list of results for the specific article title searched. The list is sorted by count (highest first, limit: 30), returning associated data in four categories (count, current article, previous article, type).
