interface IPhone {
  useLightning();
}

interface Android {
  useMicroUSB();
}

export class iPhone7 implements IPhone {
  useLightning() {
    console.log("Using lightning port..");
  }
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log("Using micro USB...");
  }
}

// -----
export class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: IPhone;

  constructor(iphone: IPhone) {
    this.iphoneDevice = iphone;
  }

  useMicroUSB() {
    console.log("Want to use micro USB, converting...");
    this.iphoneDevice.useLightning();
  }
}
