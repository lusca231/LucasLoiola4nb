import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://lucas_sl94_user:nZnJoIMKuY9OZ2rAOZDCTr5cUouKWd4o@dpg-crbp04jv2p9s73djcblg-a.oregon-postgres.render.com/lucas_sl94";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
