import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head>");
        out.println("<title>Login Result</title>");

        out.println("<style>");
        out.println("body { font-family: Arial; background-color: #f2f2f2; margin:0; }");
        out.println(".container { width:500px; background:white; margin:80px auto; padding:25px; border-radius:8px; box-shadow:0 0 8px gray; text-align:center; }");
        out.println("h2 { color:#2563eb; }");
        out.println("p { font-size:18px; }");
        out.println("a { background:#2563eb; color:white; padding:10px 20px; text-decoration:none; display:inline-block; margin-top:15px; }");
        out.println("footer { background:#222; color:white; text-align:center; padding:12px; margin-top:50px; }");
        out.println("</style>");

        out.println("</head>");
        out.println("<body>");

        out.println("<div class='container'>");

        if(username.equals("admin") &&
           password.equals("1234")) {

            HttpSession session =
                    request.getSession();

            Integer count =
                    (Integer) session.getAttribute("loginCount");

            if(count == null) {
                count = 1;
            }
            else {
                count++;
            }

            session.setAttribute("loginCount", count);

            out.println("<h2>Login Successful</h2>");
            out.println("<p>Name: " + username + "</p>");
            out.println("<p>Number of times logged in: "
                    + count + "</p>");
        }

        else {

            out.println("<h2>Invalid Login</h2>");
            out.println("<p>Wrong Username or Password</p>");
        }

        out.println("<a href='index.html'>Go Back</a>");

        out.println("</div>");

        out.println("<footer>");
        out.println("copyright@24071A05J2");
        out.println("</footer>");

        out.println("</body>");
        out.println("</html>");
    }
}