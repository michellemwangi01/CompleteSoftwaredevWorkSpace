import java.awt.*;
import javax.swing.*;

public class GridLayoutExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("GridLayout Example");
        JPanel panel = new JPanel();

        // *!!!!!!!!!!!!MOST IMPORTANT CODE LINE BELOW!!!!!!!!!!!!!!!*
        panel.setLayout(new GridLayout(2, 4)); // create a 3 x 3 grid

        // create 9 buttons and add them to the panel
        for (int i = 1; i <= 9; i++) {
            JButton button = new JButton("Button " + i);
            panel.add(button);
        }

        frame.add(panel);
        frame.pack();
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
