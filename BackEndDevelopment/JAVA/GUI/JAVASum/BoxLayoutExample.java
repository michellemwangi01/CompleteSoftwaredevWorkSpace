import java.awt.*;
import javax.swing.*;

public class BoxLayoutExample {
    public static void main(String[] args) {
        // Create a JFrame and set its size and layout
        JFrame frame = new JFrame("BoxLayout Example");
        frame.setSize(300, 200);

        // *!!!!!!!!!!!!MOST IMPORTANT CODE LINE !!!!!!!!!!!!!!!*
        frame.setLayout(new BoxLayout(frame.getContentPane(), BoxLayout.Y_AXIS)); // MOST IMPORTANT CODE LINE

        // Create three buttons and add them to the JFrame
        JButton button1 = new JButton("Button 1");
        JButton button2 = new JButton("Button 2");
        JButton button3 = new JButton("Button 3");
        JTextField jfield = new JTextField("Display the selection", 20);
        String Sarray1[] = { "John", "Mary", "Anne" };
        // JComboBox<String> cbox = new JComboBox<>(Sarray1);
        // cbox.addItem("Peter");

        frame.add(button1);
        frame.add(button2);
        frame.add(button3);
        // frame.add(jfield);
        // frame.add(cbox);

        // Set the JFrame's default close operation and make it visible
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
