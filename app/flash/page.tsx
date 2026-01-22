"use client";

export default function FlashPage() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <iframe
        src="/flash/index.html"
        title="TallyHub Web Flasher"
        style={{ border: "0", width: "100%", height: "100%" }}
        allow="serial"
      />
    </div>
  );
}
