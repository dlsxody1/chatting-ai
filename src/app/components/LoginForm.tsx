"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { signIn, signOut } from "next-auth/react";

export function LoginForm() {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <div className="bg-blue-gray-200"></div>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          AI 여자친구와 대화 연습하기
        </Typography>
        <Typography>
          현실세계 여자와 대화할 때 버벅거리지 않기 위해서 연습을 해보자..!
        </Typography>
        <Typography>연습을 하기 위해서는 로그인이 필요합니다</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => signIn("kakao")}>로그인하기</Button>
      </CardFooter>
    </Card>
  );
}
