import java.awt.FlowLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class FlowLayoutExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("FlowLayout Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // *!!!!!!!!!!!!MOST IMPORTANT CODE LINE BELOW!!!!!!!!!!!!!!!*
        JPanel panel = new JPanel(new FlowLayout());


        panel.add(new JButton("Button 1"));
        panel.add(new JButton("Button 2"));
        panel.add(new JButton("Button 3"));
        panel.add(new JButton("Button 1"));
        panel.add(new JButton("Button 2"));
        // panel.add(new JButton("Button 3"));

        frame.add(panel);
        frame.pack();
        frame.setVisible(true);
    }
}
