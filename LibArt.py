import sys
import frida

package = sys.argv[0]
device = frida.get_usb_device()
pid = device.spawn(package)
print(pid)
