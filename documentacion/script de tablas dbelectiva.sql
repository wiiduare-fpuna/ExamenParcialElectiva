
CREATE SEQUENCE public.puntos_id_usospuntos_seq;

CREATE TABLE public.punto (
                id_punto VARCHAR NOT NULL DEFAULT nextval('public.puntos_id_usospuntos_seq'),
                concepto VARCHAR NOT NULL,
                puntorequerido INTEGER NOT NULL,
                CONSTRAINT punto_pk PRIMARY KEY (id_punto)
);


ALTER SEQUENCE public.puntos_id_usospuntos_seq OWNED BY public.punto.id_punto;

CREATE SEQUENCE public.reglaparametrizacion_id_regla_seq;

CREATE TABLE public.reglaparametrizacion (
                id_regla INTEGER NOT NULL DEFAULT nextval('public.reglaparametrizacion_id_regla_seq'),
                id_punto VARCHAR NOT NULL,
                fechainicio DATE NOT NULL,
                fechavalidez DATE NOT NULL,
                monto INTEGER NOT NULL,
                limiteinferior INTEGER NOT NULL,
                limitesuperior INTEGER NOT NULL,
                diasduracion INTEGER NOT NULL,
                CONSTRAINT reglaparametrizacion_pk PRIMARY KEY (id_regla)
);


ALTER SEQUENCE public.reglaparametrizacion_id_regla_seq OWNED BY public.reglaparametrizacion.id_regla;

CREATE SEQUENCE public.datosclientes_id_clientes_seq;

CREATE TABLE public.cliente (
                id_cliente INTEGER NOT NULL DEFAULT nextval('public.datosclientes_id_clientes_seq'),
                nombre VARCHAR NOT NULL,
                apellido VARCHAR NOT NULL,
                nrodocumento INTEGER NOT NULL,
                tipodocumento INTEGER NOT NULL,
                nacionalidad VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                telefono INTEGER NOT NULL,
                fechanacimiento DATE NOT NULL,
                CONSTRAINT cliente_pk PRIMARY KEY (id_cliente)
);


ALTER SEQUENCE public.datosclientes_id_clientes_seq OWNED BY public.cliente.id_cliente;

CREATE SEQUENCE public.bolsa_id_bolsa_seq;

CREATE TABLE public.bolsa (
                id_bolsa INTEGER NOT NULL DEFAULT nextval('public.bolsa_id_bolsa_seq'),
                id_cliente INTEGER NOT NULL,
                puntajeasignado INTEGER NOT NULL,
                puntajeutilizado INTEGER NOT NULL,
                saldoPuntos INTEGER NOT NULL,
                montooperacion INTEGER NOT NULL,
                fechaasignacion VARCHAR NOT NULL,
                fechacaducidad DATE NOT NULL,
                id_regla INTEGER NOT NULL,
                CONSTRAINT bolsa_pk PRIMARY KEY (id_bolsa)
);


ALTER SEQUENCE public.bolsa_id_bolsa_seq OWNED BY public.bolsa.id_bolsa;

CREATE SEQUENCE public.cabecera_id_cabecera_seq;

CREATE TABLE public.cabecera (
                id_cabecera VARCHAR NOT NULL DEFAULT nextval('public.cabecera_id_cabecera_seq'),
                id_punto VARCHAR NOT NULL,
                id_cliente INTEGER NOT NULL,
                puntajeutilizado VARCHAR NOT NULL,
                fecha DATE NOT NULL,
                CONSTRAINT cabecera_pk PRIMARY KEY (id_cabecera)
);


ALTER SEQUENCE public.cabecera_id_cabecera_seq OWNED BY public.cabecera.id_cabecera;

CREATE SEQUENCE public.detalle_id_detalle_seq;

CREATE TABLE public.detalle (
                id_detalle VARCHAR NOT NULL DEFAULT nextval('public.detalle_id_detalle_seq'),
                id_cabecera VARCHAR NOT NULL,
                id_bolsa INTEGER NOT NULL,
                puntajeutilizado VARCHAR NOT NULL,
                CONSTRAINT detalle_pk PRIMARY KEY (id_detalle)
);


ALTER SEQUENCE public.detalle_id_detalle_seq OWNED BY public.detalle.id_detalle;

ALTER TABLE public.cabecera ADD CONSTRAINT punto_cabecera_fk
FOREIGN KEY (id_punto)
REFERENCES public.punto (id_punto)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.reglaparametrizacion ADD CONSTRAINT punto_regla_fk
FOREIGN KEY (id_punto)
REFERENCES public.punto (id_punto)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.bolsa ADD CONSTRAINT reglaparametrizacion_bolsa_fk
FOREIGN KEY (id_regla)
REFERENCES public.reglaparametrizacion (id_regla)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.cabecera ADD CONSTRAINT cliente_cabecera_fk
FOREIGN KEY (id_cliente)
REFERENCES public.cliente (id_cliente)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.bolsa ADD CONSTRAINT cliente_bolsa_fk
FOREIGN KEY (id_cliente)
REFERENCES public.cliente (id_cliente)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.detalle ADD CONSTRAINT bolsa_detalle_fk
FOREIGN KEY (id_bolsa)
REFERENCES public.bolsa (id_bolsa)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.detalle ADD CONSTRAINT cabecera_detalle_fk
FOREIGN KEY (id_cabecera)
REFERENCES public.cabecera (id_cabecera)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;
