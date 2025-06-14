
-- Tabela de restaurantes
CREATE TABLE public.restaurants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  cuisine TEXT,
  image_url TEXT,
  is_open BOOLEAN DEFAULT true,
  user_id UUID REFERENCES public.users(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabela de produtos/menu
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_id UUID REFERENCES public.restaurants(id),
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  price NUMERIC NOT NULL,
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabela de entregadores
CREATE TABLE public.delivery_drivers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id),
  name TEXT,
  active BOOLEAN DEFAULT true,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Pedidos
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users(id),         -- Cliente
  restaurant_id UUID REFERENCES public.restaurants(id),
  driver_id UUID REFERENCES public.delivery_drivers(id),
  status TEXT NOT NULL DEFAULT 'pending',           -- pending | accepted | on_the_way | delivered | canceled
  total NUMERIC,
  address TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Itens do Pedido
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id),
  product_id UUID REFERENCES public.products(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  price NUMERIC NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS: Habilitar segurança por linha para todas as tabelas novas
ALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delivery_drivers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso só permitem que usuários visualizem seus próprios dados ou dados públicos quando apropriado
CREATE POLICY "Usuário vê/edita apenas seus restaurantes" ON public.restaurants
    FOR ALL USING (user_id = auth.uid());

CREATE POLICY "Usuário vê/edita apenas seus drivers" ON public.delivery_drivers
    FOR ALL USING (user_id = auth.uid());

CREATE POLICY "Usuário vê seus pedidos" ON public.orders
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Usuário pode criar pedidos" ON public.orders
    FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Restaurantes podem ver seus próprios pedidos" ON public.orders
    FOR SELECT USING (restaurant_id = ANY (SELECT id FROM public.restaurants WHERE user_id = auth.uid()));

CREATE POLICY "Drivers veem seus pedidos" ON public.orders
    FOR SELECT USING (driver_id = (SELECT id FROM public.delivery_drivers WHERE user_id = auth.uid()));

-- Todos veem produtos do restaurante
CREATE POLICY "Qualquer usuário pode ver produtos" ON public.products
    FOR SELECT USING (true);

-- Dono do restaurante pode criar e editar produtos
CREATE POLICY "Dono do restaurante pode modificar produtos" ON public.products
    FOR ALL USING (
      restaurant_id = ANY (SELECT id FROM public.restaurants WHERE user_id = auth.uid())
    );
