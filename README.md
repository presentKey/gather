## Gather

개발 기간: 2023.03.08 ~ 2023.05.26  
개발 인원: 1인  
배포 주소: https://warm-kulfi-2043c3.netlify.app/

## 프로젝트 소개

카카오뱅크, 토스뱅크의 모임 통장을 이용하지 않고, 한 사람의 통장으로 돈을 관리하는 모임을 위한 사이트입니다. Gather는 모임 구성원들이 입출금 내역을 생성하여 통장 주인의 수고를 덜고, 입출금 내역을 공유할 수 있도록 도와줍니다.

## Stacks

### Frontend

<img src="https://img.shields.io/badge/React 18-6CDBFD"/> <img src="https://img.shields.io/badge/React Query-FB466F"/> <img src="https://img.shields.io/badge/Recoil-3C7CE6"/>

### Backend

<img src="https://img.shields.io/badge/Firestore-FFCC32"/>

### Tools

<img src="https://img.shields.io/badge/Visual Studio Code-297ACC"/> <img src="https://img.shields.io/badge/git-E84E31"/> <img src="https://img.shields.io/badge/GitHub-20232A"/>

## 주요 기능

### ▶ 로그인

firebase Authentication을 이용하여 로그인 기능 구현

- 구글 로그인
- 게스트 로그인

|                                                        로그인                                                        |
| :------------------------------------------------------------------------------------------------------------------: |
| <img width="300px" src="https://github.com/presentKey/gather/assets/115006670/95eeaf18-0ba3-4597-9294-3ad191919004"> |

---

### ▶ 모임 생성

- 모임 이름, 은행, 계좌번호를 입력하여 모임 생성
- '모임 구성원으로 게스트 유저 허용' 체크 시, 해당 모임에 게스트 유저 참가 가능

|                                                      모임 생성                                                       |
| :------------------------------------------------------------------------------------------------------------------: |
| <img width="600px" src="https://github.com/presentKey/gather/assets/115006670/f1e25fe6-abd4-4f35-90ca-f73a263783ea"> |

---

### ▶ 모임 참여

- 모임 구성원이 '모임 코드'를 공유하면, '모임 참여하기'에 해당 코드를 입력
- 게스트 사용자는 '모임 구성원으로 게스트 유저 허용'된 모임에만 참여 가능

|                                          친구 초대 코드 공유                                           |                                                모임 참여                                                |
| :----------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/presentKey/gather/assets/115006670/ca77a77d-42bc-4382-b773-54a4c39a2558"> | <img  src="https://github.com/presentKey/gather/assets/115006670/4391ab2a-4d7b-4034-92a4-d0df169927a9"> |

---

### ▶ 입금, 출금

- 금액, 메시지, 날짜를 입력하면 입출금 내역 생성 (날짜 최신순)
- 모임 수정 기능을 통해 총 금액이 변경되면, 날짜는 변경일 이후로만 선택가능
- 지출이 더 많은 경우 총 금액은 마이너스가 될 수 있습니다.

|                                                          입금                                                          |                                                          출금                                                           |
| :--------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/presentKey/next-monster-colletion/assets/115006670/22997c93-8766-4856-a0b6-bb2d719614bd"> | <img  src="https://github.com/presentKey/next-monster-colletion/assets/115006670/6b8b4630-252b-4b2a-a393-9f726331f6ba"> |

---

### ▶ 모임 수정

- 모임 이름, 은행, 계좌번호, 총 금액, 게스트 허용 옵션을 수정할 수 있습니다.
- 총 금액이 변경되면 이전에 생성된 입출금 내역은 비활성화되어 내역을 삭제할 수 없습니다.

|                                                              모임 수정                                                               |
| :----------------------------------------------------------------------------------------------------------------------------------: |
| <img width="600px" src="https://github.com/presentKey/next-monster-colletion/assets/115006670/7867d2e2-c62b-4a04-9979-d11b4758515f"> |

---

### ▶ 내역 삭제

- 자신이 생성한 내역만 삭제 할 수 있습니다.

|                                                              내역 삭제                                                               |
| :----------------------------------------------------------------------------------------------------------------------------------: |
| <img width="600px" src="https://github.com/presentKey/next-monster-colletion/assets/115006670/ad83b474-dfb9-4fe3-9aba-fa0184eafdd8"> |

---

### ▶ 모임 나가기

- 모임을 나가면 자신이 생성한 입출금 내역은 삭제되지 않고 유지됩니다.

|                                                             모임 나가기                                                              |
| :----------------------------------------------------------------------------------------------------------------------------------: |
| <img width="600px" src="https://github.com/presentKey/next-monster-colletion/assets/115006670/08f465e8-09b0-4870-8e87-53dd013971f0"> |
