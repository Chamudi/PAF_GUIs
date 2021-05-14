
package model;



import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

 


@WebServlet("/FundingbodyAPI")
public class FundingbodyAPI extends HttpServlet {
    private static final long serialVersionUID = 1L;

 

    Fundingbody FundingbodyObj = new Fundingbody();
    
    public FundingbodyAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

 

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // TODO Auto-generated method stub
        response.getWriter().append("Served at: ").append(request.getContextPath());
    }
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // TODO Auto-generated method stub
        String outputString = FundingbodyObj.insertSponcer(
        		request.getParameter("sponcerNIC"),
        		request.getParameter("sponcerFname"), 
        		request.getParameter("sponcerLname"), 
        		request.getParameter("sponcerEmail"),
        		request.getParameter("sponcerPhoneNo"));
                        
                
        response.getWriter().write(outputString);
    }    

 

    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        Map paras = getParasMap(request);

 

        String outputString = FundingbodyObj.updateSponcer(
                paras.get("sponcerId").toString(), 
                paras.get("sponcerNIC").toString(), 
                paras.get("sponcerFname").toString(), 
                paras.get("sponcerLname").toString(), 
                paras.get("sponcerEmail").toString(),
                paras.get("sponcerPhoneNo").toString());
                
        response.getWriter().write(outputString);
    }
    
    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        // TODO Auto-generated method stub
        Map paras = getParasMap(request);
        String output = FundingbodyObj.deleteSponcer(paras.get("sponcerId").toString());
        response.getWriter().write(output);         
    }

 

    // Convert request parameters to a Map
    private static Map getParasMap(HttpServletRequest request) {
        
        Map<String, String> map = new HashMap<String, String>();
        
        try {            
            Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
            String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
            scanner.close();
            
            String[] params = queryString.split("&");
            for (String param : params) {
                String[] p = param.split("=");
                map.put(p[0], p[1]);
            }
            
        } catch (Exception e) {
          }
        
        return map;
    }
}