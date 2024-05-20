import { numAtom } from "@/utils/atoms";
import { schema, SchemaType } from "@/utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { Download } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DarkModeButton from "./DarkModeButton";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [num, setNum] = useAtom(numAtom);

  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const setUserNumberFn = async (fData: SchemaType) => {
    await new Promise<void>((r) => setTimeout(r, 1000));

    setNum(fData.userNumber);

    console.log(fData);

    setIsMenuOpen(false);

    queryClient.refetchQueries();
  };

  return (
    <>
      <Navbar
        maxWidth="xl"
        className="h-[10vh]"
        isBlurred
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand className="text-2xl font-bold">RandomUser V2</NavbarBrand>

        <NavbarContent justify="end">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent justify="end" className="hidden">
          <NavbarItem>
            <form
              onSubmit={handleSubmit(setUserNumberFn)}
              className="flex gap-2"
              noValidate
            >
              <Input
                type="number"
                defaultValue="3"
                // variant="underlined"
                label="Enter Number"
                labelPlacement="outside-left"
                {...register("userNumber")}
                errorMessage={errors.userNumber?.message}
                isInvalid={errors.userNumber?.message ? true : false}
              />
              <Button
                isLoading={isSubmitting}
                type="submit"
                color="primary"
                variant="shadow"
                endContent={<Download />}
              >
                {isSubmitting ? "" : "Get"}
              </Button>
            </form>
          </NavbarItem>
          <NavbarItem>
            <DarkModeButton />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="items-center justify-center gap-4">
          <NavbarMenuItem>
            <form
              onSubmit={handleSubmit(setUserNumberFn)}
              className="flex gap-2"
              noValidate
            >
              <Input
                type="number"
                defaultValue="3"
                // variant="underlined"
                label="Enter Number"
                labelPlacement="outside-left"
                {...register("userNumber")}
                errorMessage={errors.userNumber?.message}
                isInvalid={errors.userNumber?.message ? true : false}
              />
              <Button
                isLoading={isSubmitting}
                type="submit"
                color="primary"
                variant="shadow"
                endContent={<Download />}
              >
                {isSubmitting ? "" : "Get"}
              </Button>
            </form>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <DarkModeButton />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;
