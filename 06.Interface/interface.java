public interface Dataoutput {
    void writeBoolean(boolean value) throws IOException;
    void writeByte(int value) throws IOException;
    void writeChar(int value) throws IOException;
    void writeShort(int value) throws IOException;
    void writeInt(int value) throws IOException;
}

public class DataOutputStream extends FilterOutputStream implements DataOutput {
    public final void writeBoolean (boolean value) throws IOException {
        write(value ? 1 : 0);
    }
}
