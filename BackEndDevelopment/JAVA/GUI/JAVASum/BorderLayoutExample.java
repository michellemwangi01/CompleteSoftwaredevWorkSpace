import javax.swing.*;
import java.awt.*;

public class BorderLayoutExample extends JFrame {
    public BorderLayoutExample() {
        // Set the JFrame to be visible and exit on close
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("BorderLayout Example");
        setSize(400, 300);

        // Create five JButtons for each BorderLayout position

        JButton northButton = new JButton("North");
        JButton southButton = new JButton("South");
        JButton eastButton = new JButton("East");
        JButton westButton = new JButton("West");
        JButton centerButton = new JButton("Center");

        // Create a JPanel with BorderLayout and add the buttons to it


        // *!!!!!!!!!!!!MOST IMPORTANT CODE LINES BELOW!!!!!!!!!!!!!!!*
        JPanel panel = new JPanel(new BorderLayout());
        panel.add(northButton, BorderLayout.NORTH);
        panel.add(southButton, BorderLayout.SOUTH);
        panel.add(eastButton, BorderLayout.EAST);
        panel.add(westButton, BorderLayout.WEST);
        panel.add(centerButton, BorderLayout.CENTER);

        // Add the panel to the JFrame
        add(panel);

    }

    public static void main(String[] args) {
        new BorderLayoutExample();
    }
}
