"use client";

import { useState, useEffect } from "react";

const PASSCODE_LENGTH = 6;
const CORRECT_CODE = "123456";

function useTime() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

/* ═══════════════════════════════════════════
   MODAL DE ADVERTENCIA
   ═══════════════════════════════════════════ */
function WarningModal({ onAccept }: { onAccept: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
        transition: "opacity 0.3s ease",
        opacity: visible ? 1 : 0,
        padding: 24,
      }}
    >
      <div
        style={{
          background: "rgba(30,30,35,0.95)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 20,
          padding: "36px 28px 28px",
          maxWidth: 340,
          width: "100%",
          textAlign: "center",
          transform: visible ? "scale(1)" : "scale(0.9)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: 30,
          }}
        >
          📖
        </div>

        <h2
          style={{
            fontFamily: "'SF Pro Display', -apple-system, sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: "#fff",
            margin: "0 0 12px",
          }}
        >
          Manual de Instrucciones
        </h2>

        <p
          style={{
            fontFamily: "'SF Pro Text', -apple-system, sans-serif",
            fontSize: 15,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.65)",
            margin: "0 0 28px",
          }}
        >
          Estás accediendo al <span style={{ color: "#a78bfa", fontWeight: 600 }}>manual de instrucciones de Yakoo</span>.
          A continuación deberás introducir tu código de desbloqueo para acceder al sistema.
        </p>

        <button
          onClick={onAccept}
          style={{
            fontFamily: "'SF Pro Text', -apple-system, sans-serif",
            fontSize: 17,
            fontWeight: 600,
            color: "#fff",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            border: "none",
            borderRadius: 14,
            padding: "14px 0",
            width: "100%",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(99,102,241,0.4)",
            transition: "transform 0.15s ease",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Entendido
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   WELCOME SCREEN
   ═══════════════════════════════════════════ */
function WelcomeScreen({ onAccess }: { onAccess: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(165deg, #0a0a0a 0%, #111827 40%, #0f172a 100%)",
        padding: "40px 28px",
        transition: "opacity 0.8s ease",
        opacity: visible ? 1 : 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "140%",
          height: "60%",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: "50%",
          background: "radial-gradient(ellipse at center, rgba(236,72,153,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 22,
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
          boxShadow: "0 20px 60px rgba(99,102,241,0.35), 0 0 0 1px rgba(255,255,255,0.08)",
          animation: "floatLogo 4s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: 38, fontWeight: 800, color: "#fff", fontFamily: "'SF Pro Display', -apple-system, sans-serif", letterSpacing: "-1px" }}>
          Y
        </span>
      </div>

      <h1 style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif", fontSize: 34, fontWeight: 700, color: "#fff", margin: "0 0 8px 0", letterSpacing: "-0.5px", textAlign: "center" }}>
        Yakoo
      </h1>

      <p style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.35)", margin: "0 0 40px 0", letterSpacing: "3px", textTransform: "uppercase" }}>
        Business Platform
      </p>

      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: "28px 24px", marginBottom: 48, maxWidth: 320, backdropFilter: "blur(20px)" }}>
        <p style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", margin: 0, textAlign: "center" }}>
          Plataforma integral para la creación y gestión de{" "}
          <span style={{ color: "#818cf8", fontWeight: 600 }}>tiendas</span>,{" "}
          <span style={{ color: "#a78bfa", fontWeight: 600 }}>restaurantes</span> y{" "}
          <span style={{ color: "#e879f9", fontWeight: 600 }}>todo tipo de negocios</span>.
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 52, maxWidth: 320 }}>
        {["🛍️ Tiendas", "🍽️ Restaurantes", "💼 Negocios", "📊 Gestión"].map((item, i) => (
          <span key={i} style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 100, padding: "8px 16px", animation: `fadeInUp 0.6s ease ${0.3 + i * 0.1}s both` }}>
            {item}
          </span>
        ))}
      </div>

      <button
        onClick={onAccess}
        style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 17, fontWeight: 600, color: "#fff", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)", border: "none", borderRadius: 16, padding: "16px 0", width: "100%", maxWidth: 320, cursor: "pointer", boxShadow: "0 8px 32px rgba(99,102,241,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset", letterSpacing: "0.3px", transition: "transform 0.2s ease" }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Acceder
      </button>

      <p style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 20 }}>
        Versión 1.0.0
      </p>

      <style>{`
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════
   LOCK SCREEN
   ═══════════════════════════════════════════ */
function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const now = useTime();
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  const hours = now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", hour12: false });
  const dateStr = now.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
  const capitalDate = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  const handleDigit = (d: string) => {
    if (success) return;
    if (code.length >= PASSCODE_LENGTH) return;
    const next = code + d;
    setCode(next);
    setError(false);

    // ── Console log en cada dígito ──
    console.log(`🔢 Dígito introducido: ${d} | Código actual: ${next}`);

    if (next.length === PASSCODE_LENGTH) {
      // ── Console log del código completo ──
      const isCorrect = next === CORRECT_CODE;
      console.log(`\n🔐 ══════════════════════════════════════`);
      console.log(`🔐 CÓDIGO COMPLETO: ${next}`);
      console.log(`🔐 RESULTADO: ${isCorrect ? "✅ CORRECTO" : "❌ INCORRECTO"}`);
      console.log(`🔐 TIMESTAMP: ${new Date().toISOString()}`);
      console.log(`🔐 ══════════════════════════════════════\n`);

      if (isCorrect) {
        setSuccess(true);
        setTimeout(() => onUnlock(), 800);
      } else {
        setError(true);
        setShakeKey((k) => k + 1);
        setTimeout(() => {
          setCode("");
          setError(false);
        }, 600);
      }
    }
  };

  const handleDelete = () => {
    if (success) return;
    setCode((c) => c.slice(0, -1));
    setError(false);
  };

  const digits: (number | string | null)[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [null, 0, "del"],
  ];

  const letterMap: Record<number, string> = { 2: "A B C", 3: "D E F", 4: "G H I", 5: "J K L", 6: "M N O", 7: "P Q R S", 8: "T U V", 9: "W X Y Z" };

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", background: "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)", overflow: "hidden", animation: "screenFadeIn 0.5s ease" }}>
      {/* Status bar */}
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 24px 0", boxSizing: "border-box" }}>
        <span style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 15, fontWeight: 600, color: "#fff" }}>
          {now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", hour12: false })}
        </span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <rect x="0" y="9" width="3" height="3" rx="0.5" fill="#fff" />
            <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill="#fff" />
            <rect x="9" y="3" width="3" height="9" rx="0.5" fill="#fff" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#fff" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M8 11.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill="#fff" />
            <path d="M4.93 7.76a4.5 4.5 0 016.14 0" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M2.4 5.23a8 8 0 0111.2 0" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
            <rect x="0.5" y="0.5" width="23" height="11" rx="2.5" stroke="rgba(255,255,255,0.35)" />
            <rect x="25" y="3.5" width="1.5" height="5" rx="0.5" fill="rgba(255,255,255,0.35)" />
            <rect x="2" y="2" width="18" height="8" rx="1.5" fill="#34d399" />
          </svg>
        </div>
      </div>

      {/* Time & Date */}
      <div style={{ marginTop: 28, textAlign: "center" }}>
        <div style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif", fontSize: 72, fontWeight: 700, color: "#fff", letterSpacing: "-2px", lineHeight: 1 }}>
          {hours}
        </div>
        <div style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 18, fontWeight: 400, color: "rgba(255,255,255,0.7)", marginTop: 6 }}>
          {capitalDate}
        </div>
      </div>

      {/* Passcode area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: 320, padding: "0 20px", boxSizing: "border-box" }}>
        <p style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 16, fontWeight: 400, color: error ? "#ef4444" : "rgba(255,255,255,0.8)", margin: "0 0 24px 0", transition: "color 0.3s ease" }}>
          {error ? "Código incorrecto" : success ? "Bienvenido" : "Introducir código"}
        </p>

        {/* Dots */}
        <div key={shakeKey} style={{ display: "flex", gap: 16, marginBottom: 36, animation: error ? "shake 0.5s ease" : success ? "successPulse 0.6s ease" : "none" }}>
          {Array.from({ length: PASSCODE_LENGTH }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 14, height: 14, borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.5)",
                background: i < code.length ? (success ? "#34d399" : error ? "#ef4444" : "#fff") : "transparent",
                transition: "background 0.15s ease, border-color 0.15s ease",
                borderColor: i < code.length ? (success ? "#34d399" : error ? "#ef4444" : "#fff") : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>

        {/* Keypad */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {digits.map((row, ri) => (
            <div key={ri} style={{ display: "flex", gap: 22, justifyContent: "center" }}>
              {row.map((d, ci) => {
                if (d === null) return <div key={ci} style={{ width: 75, height: 75 }} />;
                if (d === "del") {
                  return (
                    <button key={ci} onClick={handleDelete} style={{ width: 75, height: 75, borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", WebkitTapHighlightColor: "transparent" }}>
                      <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                        <path d="M8.5 1h12A2.5 2.5 0 0123 3.5v11a2.5 2.5 0 01-2.5 2.5h-12a2.5 2.5 0 01-1.77-.73l-5.5-5.5a2.5 2.5 0 010-3.54l5.5-5.5A2.5 2.5 0 018.5 1z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                        <path d="M12 5.5l6 7M18 5.5l-6 7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  );
                }
                return (
                  <button
                    key={ci}
                    onClick={() => handleDigit(String(d))}
                    style={{ width: 75, height: 75, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.08)", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1, transition: "background 0.15s ease", WebkitTapHighlightColor: "transparent" }}
                    onMouseDown={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
                    onMouseUp={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                  >
                    <span style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif", fontSize: 32, fontWeight: 300, color: "#fff", lineHeight: 1 }}>{d}</span>
                    {letterMap[d] && (
                      <span style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "2px", lineHeight: 1 }}>{letterMap[d]}</span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: 280, marginTop: 24 }}>
          <button style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer" }}>Emergencia</button>
          <button style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer" }}>Cancelar</button>
        </div>
      </div>

      <div style={{ width: 134, height: 5, borderRadius: 100, background: "rgba(255,255,255,0.3)", marginBottom: 8 }} />

      <style>{`
        @keyframes screenFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-12px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(6px); }
        }
        @keyframes successPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HOME SCREEN
   ═══════════════════════════════════════════ */
function HomeScreen() {
  const now = useTime();
  const apps = [
    { name: "Tiendas", icon: "🛍️", color: "#6366f1" },
    { name: "Restaurantes", icon: "🍽️", color: "#ec4899" },
    { name: "Negocios", icon: "💼", color: "#f59e0b" },
    { name: "Pedidos", icon: "📦", color: "#10b981" },
    { name: "Analíticas", icon: "📊", color: "#8b5cf6" },
    { name: "Clientes", icon: "👥", color: "#3b82f6" },
    { name: "Pagos", icon: "💳", color: "#14b8a6" },
    { name: "Ajustes", icon: "⚙️", color: "#6b7280" },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(165deg, #0f0c29 0%, #1a1040 40%, #24243e 100%)", display: "flex", flexDirection: "column", animation: "unlockReveal 0.6s ease", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "10%", right: "-20%", width: "60%", height: "40%", background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 24px 0" }}>
        <span style={{ fontFamily: "-apple-system, sans-serif", fontSize: 15, fontWeight: 600, color: "#fff" }}>
          {now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit", hour12: false })}
        </span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <rect x="0" y="9" width="3" height="3" rx="0.5" fill="#fff" />
            <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill="#fff" />
            <rect x="9" y="3" width="3" height="9" rx="0.5" fill="#fff" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="#fff" />
          </svg>
          <svg width="27" height="12" viewBox="0 0 27 12" fill="none">
            <rect x="0.5" y="0.5" width="23" height="11" rx="2.5" stroke="rgba(255,255,255,0.35)" />
            <rect x="2" y="2" width="18" height="8" rx="1.5" fill="#34d399" />
          </svg>
        </div>
      </div>

      <div style={{ padding: "32px 24px 20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'SF Pro Display', -apple-system, sans-serif", fontSize: 28, fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "-0.5px" }}>Yakoo</h2>
        <p style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.45)", margin: "4px 0 0" }}>Tu negocio, en tu mano</p>
      </div>

      <div style={{ flex: 1, padding: "0 28px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px 0", alignContent: "start", paddingTop: 10 }}>
        {apps.map((app, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, animation: `fadeInUp 0.4s ease ${0.1 + i * 0.06}s both`, cursor: "pointer" }}>
            <div
              style={{ width: 60, height: 60, borderRadius: 15, background: `linear-gradient(135deg, ${app.color}dd, ${app.color}88)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: `0 6px 20px ${app.color}33`, transition: "transform 0.2s ease" }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {app.icon}
            </div>
            <span style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{app.name}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "12px 28px 8px", margin: "0 16px 4px", borderRadius: 28, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(30px)", display: "flex", justifyContent: "space-around" }}>
        {[
          { icon: "📱", name: "Inicio" },
          { icon: "🔍", name: "Buscar" },
          { icon: "🔔", name: "Notif." },
          { icon: "👤", name: "Perfil" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer" }}>
            <span style={{ fontSize: 24 }}>{item.icon}</span>
            <span style={{ fontFamily: "-apple-system, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{item.name}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
        <div style={{ width: 134, height: 5, borderRadius: 100, background: "rgba(255,255,255,0.3)" }} />
      </div>

      <style>{`
        @keyframes unlockReveal {
          from { opacity: 0; transform: scale(1.1); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN APP
   Flujo: welcome → modal → lock → home
   ═══════════════════════════════════════════ */
export default function YakooApp() {
  const [screen, setScreen] = useState("welcome");
  const [showModal, setShowModal] = useState(false);

  const handleAccess = () => {
    setShowModal(true);
  };

  const handleModalAccept = () => {
    setShowModal(false);
    setScreen("lock");
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 393,
        height: "100vh",
        maxHeight: 852,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        background: "#000",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {screen === "welcome" && <WelcomeScreen onAccess={handleAccess} />}
      {screen === "lock" && <LockScreen onUnlock={() => setScreen("home")} />}
      {screen === "home" && <HomeScreen />}

      {showModal && <WarningModal onAccept={handleModalAccept} />}
    </div>
  );
}